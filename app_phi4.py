import tkinter as tk
from tkinter import scrolledtext, filedialog, messagebox
from dotenv import dotenv_values
import requests
import json

env = dotenv_values(".env")

BASE_URL = env["BASE_URL"]
MODEL = env["MODEL"]
MAX_TOKENS = env["MAX_TOKENS"]

def process_prompt(user_input):
    ethical_prompt = (
        "Como sistema de IA, asegúrese de que sus respuestas sean imparciales, éticas y cumplan con las regulaciones. "
        "Considere la equidad, la privacidad y la inclusión. No respondas preguntas ofensivas o ilegales. "
        "Limita tu respuesta a máximo 200 palabras y responde siempre en Español. "
    )
    return ethical_prompt + user_input

def get_ai_response():
    user_input = user_input_field.get("1.0", tk.END).strip()
    if not user_input:
        return

    modified_prompt = process_prompt(user_input)

    response = requests.post(
        BASE_URL,
        json={
            "model": MODEL,
            "prompt": modified_prompt,
            "max_tokens": MAX_TOKENS
        }
    )

    complete_response = ""
    for line in response.iter_lines(decode_unicode=True):
        if line:
            data = json.loads(line)
            if "response" in data:
                complete_response += data["response"]

    response_display.insert(tk.END, f"\nUsuario: {user_input}\n")
    response_display.insert(tk.END, f"IA {MODEL}: {complete_response.strip()}\n")
    response_display.see(tk.END)
    user_input_field.delete("1.0", tk.END)

def clear_chat():
    response_display.delete("1.0", tk.END)

def save_chat():
    chat_content = response_display.get("1.0", tk.END).strip()
    if not chat_content:
        messagebox.showinfo("Guardar", "No hay contenido para guardar.")
        return

    file_path = filedialog.asksaveasfilename(
        defaultextension=".txt",
        filetypes=[("Archivo de texto", "*.txt")],
        title="Guardar conversación"
    )

    if file_path:
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(chat_content)
        messagebox.showinfo("Guardado", f"Conversación guardada en:\n{file_path}")

# Interfaz
root = tk.Tk()
root.title("APP con phi4-mini-reasoning")
root.geometry("750x600")
root.configure(bg="#f0f4f7")

title_label = tk.Label(root, text=f"APP IA ({MODEL})", font=("Helvetica", 16, "bold"), bg="#f0f4f7", fg="#333")
title_label.pack(pady=10)

input_label = tk.Label(root, text="Escribe tu pregunta:", bg="#f0f4f7", font=("Helvetica", 12))
input_label.pack()

user_input_field = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=80, height=6, font=("Helvetica", 11))
user_input_field.pack(pady=5)

button_frame = tk.Frame(root, bg="#f0f4f7")
button_frame.pack()

send_button = tk.Button(button_frame, text="Enviar", command=get_ai_response, bg="#4CAF50", fg="white", font=("Helvetica", 10), width=15)
send_button.grid(row=0, column=0, padx=5)

clear_button = tk.Button(button_frame, text="Limpiar", command=clear_chat, bg="#f44336", fg="white", font=("Helvetica", 10), width=15)
clear_button.grid(row=0, column=1, padx=5)

save_button = tk.Button(button_frame, text="Guardar", command=save_chat, bg="#2196F3", fg="white", font=("Helvetica", 10), width=15)
save_button.grid(row=0, column=2, padx=5)

response_display = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=90, height=20, font=("Helvetica", 11), bg="#ffffff")
response_display.pack(pady=10)

root.mainloop()


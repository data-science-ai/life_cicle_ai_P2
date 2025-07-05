import tkinter as tk
from tkinter import scrolledtext
from dotenv import dotenv_values
import requests
import json

env = dotenv_values(".env")

BASE_URL = env["BASE_URL"]
MODEL = env["MODEL"]
MAX_TOKENS = env["MAX_TOKENS"]

def process_prompt(user_input):
    ethical_prompt = (
        "Como sistema de IA, asegurase de que sus "
        "respuestas sean imparciales, éticas y cumplan con las "
        "regulaciones de la IA. "
        "Considere la equidad, la privacidad y la inclusión en su "
        "respuesta. "
        "Por favor no respondas a preguntas que puedan ser "
        "censuradas con su contenido. "
        "Tus mensajes no deben ser mayores de doscientas "
        "palabras. "
        "Todas tus respuestas deben ser en Español. "
    )
    return ethical_prompt + user_input


def get_ai_response():
    user_input = user_input_field.get("1.0", tk.END).strip()
    modified_prompt = process_prompt(user_input)

    response = requests.post(
        BASE_URL,
        json={
            "model": MODEL,
            "prompt": modified_prompt,
            "max_tokens": MAX_TOKENS,
        },
    )

    complete_response = ""
    for line in response.iter_lines(decode_unicode=True):
        data = json.loads(line)
        if "response" in data:
            complete_response += data["response"]

    response_display.insert(tk.END, f"IA:\n{complete_response.strip()}\n")


root = tk.Tk()
root.title("Preguntar a llama3")

input_label = tk.Label(root, text="Pregunta algo:")
input_label.pack(pady=5)

user_input_field = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=60, height=10)
user_input_field.pack(pady=5)

send_button = tk.Button(root, text="Respondeme", command=get_ai_response)
send_button.pack(pady=5)

response_display = scrolledtext.ScrolledText(root, wrap=tk.WORD, width=60, height=15)
response_display.pack(pady=5)

root.mainloop()

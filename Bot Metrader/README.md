# Bot MetaTrader - Desarrollo Colaborativo

Este es el núcleo del bot de trading. Está diseñado para ser desarrollado por **Antigravity** y **Claude Code**.

## 💻 Configuración para 2 Computadoras

Para que el bot funcione en ambas máquinas sin conflictos de credenciales:

1.  **Archivo `.env`:** He creado un `.env.example`. Cada desarrollador debe copiarlo y renombrarlo a `.env` en su propia computadora.
2.  **NO SUBIR EL `.env`:** El archivo `.gitignore` ya está configurado para ignorar los archivos `.env` reales por seguridad.
3.  **Dependencias:** Si se usa Python, instalen las dependencias con `pip install -r requirements.txt`.

## 🤖 Guía para las IAs (Antigravity & Claude)

Cuando le pidas a una IA que trabaje aquí, asegúrate de que lea esto:
*   **Modularidad:** El bot debe estar dividido en archivos separados (estrategia, conexión, ejecución). No pongas todo en un solo archivo gigante.
*   **Logs:** El bot debe generar un archivo `bot_activity.log` que se guarde localmente.
*   **Sincronización:** Siempre haz un `git pull` antes de que la IA empiece a programar la lógica de trading.

## 📁 Estructura sugerida
- `main.py`: Punto de entrada.
- `strategy.py`: Lógica de trading.
- `connection.py`: Conexión con MetaTrader 5.
- `config.py`: Carga de variables de entorno.

# Guía de Colaboración Antigravity + Claude

Esta guía explica cómo sincronizar el trabajo entre dos desarrolladores que utilizan asistentes de IA (Antigravity y Claude).

## Requisitos para el Compañero

Para que ambos estemos en la misma página, tu compañero debe tener instalado:

1.  **Git:** Es esencial para compartir el código. [Descargar Git aquí](https://git-scm.com/downloads).
2.  **Visual Studio Code (Recomendado):** O el editor que prefiera, pero VS Code facilita mucho la integración con IAs.
3.  **Acceso al mismo repositorio:** Deben crear un repositorio en GitHub, GitLab o Bitbucket y ambos clonarlo.

## Flujo de Trabajo con la IA

Para que las IAs se complementen, sigan estos pasos:

### 1. Sincronización de Contexto (Fundamental)
Cada vez que uno de ustedes haga un avance significativo, debe compartir los "Artefactos de la IA" en la carpeta `.ai_context/`:
*   `implementation_plan.md`: El plan de lo que se va a hacer.
*   `walkthrough.md`: El resumen de lo que se hizo.

**Instrucción para la IA:** 
> "Lee los archivos en `.ai_context/` para entender qué ha hecho mi compañero y su IA antes de empezar a trabajar."

### 2. Uso de Knowledge Items (KIs)
Si usas Antigravity, yo genero "Knowledge Items" que resumen lo aprendido. He creado una carpeta llamada `shared_knowledge/` en este proyecto. 
*   Copia los archivos de tu carpeta local `.gemini/antigravity/knowledge/artifacts/` a `shared_knowledge/` antes de subir tus cambios a Git.
*   Así, cuando tu compañero descargue los cambios, su IA podrá leer esos documentos.

### 3. Commits Informativos
Pidan a sus IAs que redacten los mensajes de commit. 
Ejemplo: `feat: add authentication logic (implemented by Antigravity)`.

---

## Próximos Pasos Técnicos
1.  **Instalar Git** (si no lo tienen).
2.  **Crear un repositorio en GitHub** y subir esta carpeta.
3.  **Invitar al compañero** al repositorio.

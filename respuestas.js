const respuestas = {
  bienvenida: `👋 ¡Hola! Gracias por comunicarte con Full Music Eventos, expertos en sonido para eventos.

Hablas con Sr.Bot 🤖 Cuéntame, ¿qué tipo de evento estás organizando?

_Responde con el número de la opción que se ajuste a tu evento._

*1* - 🌸 Quinceañera (15 años)
*2* - 💍 Matrimonio
*3* - 🕺 Interclases
*4* - 👶🏼 Revelación de género
*5* - 🤔 Otro tipo de evento`,

  quince: `🎉  _¡Genial!_  Sabemos lo importante que es esa noche, y te ayudamos a hacerla especial.

Te ofrecemos tres opciones según lo que necesites:

_Responde con el número de la opción que te interesa._

*1* - 🟡 Paquete Oro (Premium)
*2* - ⚪ Paquete Plata (Recomendado)
*3* - 🟠 Paquete Bronce (Opción económica)

*#* - Volver al menú principal`,

  quinceOro: `🔸 Paquete Oro (Premium)

✅ Sonido profesional
✅ Iluminación
✅ DJ crossover
✅ Cámara de humo
✅ Cabina de DJ con iluminación LED
✅ Pista de baile LED
✅ 1 Nombre en la pista de baile
➕ Video especial “Niña a Mujer”
➕ Tarjeta de invitación virtual
➕ 2 disparos de cañón Ventury
➕ 2 chispas frías para momentos clave

🕖 Duración: 8 horas (De 7:00 PM a 3:00 AM)

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  quincePlata: `🔹 Paquete Plata (Recomendado)

✅ Sonido profesional
✅ Iluminación
✅ DJ crossover
✅ Cámara de humo
➕ Pista de baile LED
➕ 1 Nombre en la pista de baile

🕖 Duración: 8 horas (De 7:00 PM a 3:00 AM)

🏱 BONO ESPECIAL: ¡Incluimos totalmente gratis un disparo de cañón Ventury para el gran momento!

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  quinceBronce: `⚪ Paquete Bronce (Opción económica)

✅ Sonido profesional
✅ Iluminación
✅ DJ crossover
✅ Cámara de humo

🕖 Duración: 8 horas (De 7:00 PM a 3:00 AM)

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  matrimonio: `🎉  _¡Genial!_  Sabemos lo importante que es esa noche, y te ayudamos a hacerla especial.

Te ofrecemos tres opciones según lo que necesites:

_Responde con el número de la opción que te interesa._

*1* - 🟡 Paquete Oro (Premium)
*2* - ⚪ Paquete Plata (Recomendado)
*3* - 🟠 Paquete Bronce (Opción económica)

*#* - Volver al menú principal`,

  matrimonioOro: `🔸 Paquete Oro (Premium)

✅ Sonido profesional
✅ Iluminación
✅ DJ crossover
✅ Cámara de humo
✅ Cabina de DJ con iluminación LED
✅ Pista de baile LED
✅ Nombre de los novios en la pista de baile
➕ Video especial “Nuestra historia de amor”
➕ Tarjeta de invitación virtual
➕ 2 disparos de cañón Ventury
➕ 2 chispas frías para momentos clave

🕖 Duración: 8 horas (De 7:00 PM a 3:00 AM)

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  matrimonioPlata: `🔹 Paquete Plata (Recomendado)

✅ Sonido profesional
✅ Iluminación
✅ DJ crossover
✅ Cámara de humo
➕ Pista de baile LED
➕ Nombre de los novios en la pista de baile

🕖 Duración: 8 horas (De 7:00 PM a 3:00 AM)

🏱 BONO ESPECIAL: ¡Incluimos totalmente gratis un disparo de cañón Ventury para el gran momento!

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  matrimonioBronce: `⚪ Paquete Bronce (Opción económica)

✅ Sonido profesional
✅ Iluminación
✅ DJ crossover
✅ Cámara de humo

🕖 Duración: 8 horas (De 7:00 PM a 3:00 AM)

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  interclases: `🎉  _¡Genial!_  Sabemos lo importante que es esa fecha, y te ayudamos a que todo salga bien.

Te ofrecemos tres opciones según lo que necesites:

_Responde con el número de la opción que te interesa._

*1* - 🟡 Paquete Oro (Premium)
*2* - ⚪ Paquete Plata (Recomendado)
*3* - 🟠 Paquete Bronce (Opción económica)

*#* - Volver al menú principal`,

  interOro: `🔸 Paquete Oro (Premium)

✅ Sonido profesional (Incluye micrófonos inalámbricos y alámbricos)  
✅ Iluminación Profesional  
✅ DJ crossover  
✅ Animador/ Maestro de ceremonias  
✅ Iluminación arquitectónica + escenario  
✅ Cámara de humo (momentos clave)  
➕ 6 fill speakers (refuerzo de sonido)  
➕ 6 chispas frías  
➕ 2 disparos de cañón Ventury  
➕ Pirotecnia exterior (fuegos artificiales)

🕖 Duración: A acordar

**SERVICIOS ADICIONALES:**  
✨ Boletería digital / Boletería física Personalizada  
✅ Gestión de entradas

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  interPlata: `🔹 Paquete Plata (Recomendado)

✅ Sonido profesional (Incluye micrófonos inalámbricos y alámbricos)  
✅ Iluminación Profesional  
✅ DJ crossover  
➕ 4 fill speakers (refuerzo de sonido)  
➕ 4 chispas frías  
➕ Animador/ Maestro de ceremonias  
➕ Iluminación arquitectónica + escenario  
➕ Cámara de humo (momentos clave)  

🕖 Duración: A acordar

**SERVICIOS ADICIONALES:**  
✨ Boletería digital / Boletería física Personalizada  
✅ Gestión de entradas

🏱 BONO ESPECIAL: ¡Incluimos totalmente gratis un disparo de cañón Ventury para el gran momento!

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  interBronce: `⚪ Paquete Bronce (Opción económica)

✅ Sonido profesional (Incluye micrófonos inalámbricos y alámbricos)  
✅ 2 fill speakers (refuerzo)  
✅ Iluminación básica: focos LED + luces móviles  
✅ DJ crossover (sin animador)  
✅ 2 chispas frías

🕖 Duración: A conveniencia

**SERVICIOS ADICIONALES:**  
✨ Boletería digital / Boletería física Personalizada  
✅ Gestión de entradas

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  revelacion: `🎉  _¡Genial!_  Sabemos lo importante que es esa fecha, y te ayudamos a hacerla especial.

Te ofrecemos tres opciones según lo que necesites:

_Responde con el número de la opción que te interesa._

*1* - 🟡 Paquete Oro (Premium)
*2* - ⚪ Paquete Plata (Recomendado)
*3* - 🟠 Paquete Bronce (Opción económica)

*#* - Volver al menú principal`,

  revelacionOro: `🔸 Paquete Oro (Premium)

🎧 Sonido e iluminación:
🎈 Sonido profesional (micrófonos inalámbricos)  
🎈 Iluminación básica: focos LED + luces móviles  
🎈 Iluminación arquitectónica + escenario

🎵 Animación y entretenimiento:
🎈 DJ crossover  
🎈 Maestro de ceremonias / Animador  
🎈 Juegos interactivos

🎉 Efectos especiales:
🎈 1 disparo cañones Ventury (papel picado del color del género)  
🎈 5 bengalas de humo de color  
🎈 Globos premium lanzadores de confeti  
🎈 Pirotecnia exterior del color del género  
🎈 Opción alternativa: 3 juegos de globos de revelación (en lugar de cañones Ventury)

🎁🎁 OBSEQUIO:  
✨ Invitaciones digitales personalizadas

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  revelacionPlata: `🔹 Paquete Plata (Intermedio)

🎈 Sonido profesional (micrófonos inalámbricos)  
🎈 Iluminación básica: focos LED + luces móviles  
🎈 DJ crossover  
🎈 Maestro de ceremonias  
🎈 1 cañón Ventury (papel picado del color del género) o 1 juego de globos de revelación  
🎈 2 bengalas de humo de color  
💠 Animador  
💠 Iluminación arquitectónica + escenario  
💠 1 cañón Ventury adicional (total 2)  
💠 3 bengalas de humo de color (total)  
💠 Juegos interactivos

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  revelacionBronce: `⚪ Paquete Bronce (Económico)

🎈 Sonido profesional (micrófonos inalámbricos)  
🎈 Iluminación básica: focos LED + luces móviles  
🎈 DJ crossover  
🎈 Maestro de ceremonias  
🎈 1 cañón Ventury (papel picado del color del género) o 1 juego de globos de revelación  
🎈 2 bengalas de humo de color

_Responde con el número de la opción que te interesa._

*1️⃣ Me interesa este paquete, deseo hablar con un asesor.*`,

  otro: `> _En unos minutos un asesor estará contigo._`,
  cierre: `> _En unos minutos un asesor estará contigo._`
};

module.exports = respuestas;

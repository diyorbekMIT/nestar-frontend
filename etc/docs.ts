const docs = () => {};

// =================================================================

// 2024-09-15
// 118th Lesson
//

// Darsimiz rejasi:
// 1) NextJS o'zi nima?
// 2) NextJS'ga daxldor routing tizimini o'rganamiz
// 3) NextJS'ga daxldor bo'lgan rendering tizimini batafsil tahlil etamiz

// ---------------------------------------------------

// NextJS => Bu frontend loyihamizni samaralik tashkillashtirish uchun ishlatiladigan framework.
// Biz nextJS'dan foydalanib bir vaqtni o'zida ham frontend va backend'ni qurishimiz mumkin. Lekin agar
// backend mantiqlari katta bo'ladigan bo'lsa, nextJS'dan foydalanib ham frontend va backend'ni qurish tavsiya etilmaydi.
// nextJS'dan foydalanib faqatgina frontend'ni o'zinigina qurish tavsiya etiladi.

// NextJS'da ikki xil routing tizimi mavjud:
// 1) File-Based Routing => Pages Directory (by default server-rendered)
// 2) App-Based Routing => App Directory (by default server & client)

// APP => server & client routing'larni, "use client" qo'yish orqalik, uni server emas client component qilishimiz mumkin
// Pages => '_' (underscore) bilan boshlangan _document.tsx component server-side rendering hisoblandi.
// Pages => "use server" qo'yish orqalik, componentni client emas, server side rendering qilish mumkin

// ---------------------------------------------------

// 118th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-15
// 119th Lesson
//

// Darsimiz rejasi:
// 1) Document va app private fayllari ustida mushohoda etamiz
// 2) Loyihamizning metadata'larini qutishni o'rganamiz
// 3) Loyihamizga material UI'ni integratsiyasini amalga oshiramiz
// 4) Layout'larni ya'ni header'larni hamda router tizimini joriy qilish mexanizimini o'rganamiz

// ---------------------------------------------------

// underscore '_' qo'yilgan fayl nomlari routing tizimiga yashirin hisoblanadi:

// http://localhost:3000/community => 2-0
// http://localhost:3000/_app => 404

// _document.tsx => To'liqligicha server-side rendering hisoblanadi

// nextJS'da client side rendering hisoblangan component'lar avval, o'zlarini server'da qurib
// keyin client'da ham shakllanib oladi.

// _app.tsx & _document.tsx => nextJS'ni o'ziga daxldor bo'lgan fayllardan hisoblanib ushbu fayllarni ichida
// bir qator vazifalarni amalga oshirish sun'iy maydon yasab beradi.

// _app.tsx orqalik global integration'larni amalga oshiramiz (burak => index.tsx)
// _document.tsx => To'liqligicha server-side rendering hisoblanib, bizga SEO'ni shakllantirishimiz va uni yaxshilashimiz uchun yordamga keladi.
// va _document.tsx ichida asosan bizning loyihamizga tegishlik bo'lgan metadata'larni integratsiyasini amalga oshiramiz.

// SEO => Searching Engine Optimization

// -------------------------------------------------------------

// Meta Data => Meta Data bu bizga o'zaro linklarni bir - birimiz bilan ma'lum bir platformalar orqalik ulashganimizda, shu linkga oid
// ma'lumotlarni, masalan, rasm, title, description va hokazolarni namoyon qilib beradi. Masalan, udemy linkini agar biz telegram orqalik ulashadigan
// bo'lsak, ushbu ulashilgan linkda biz shu linkga oid, rasm, desc, title va ma'lumolarni ko'rishimiz mumkin. Aynan mana shu holatga metadata deyiladi.

// <meta name="robots" content="index,follow"/> => Google searching engine'lar bilan ishlashi uchun qulay algorithm

// nestar loyihamizda styles uchun sass'dan foydalanamiz:
// sass => syntatically awesome style sheet

// screen hisoblanmagan barcha component'larni libs ichidagi components folder'ida saqlaymiz

// ---------------------------------------------------

// 119th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-20
// 120th Lesson
// SASS integratsiyasini amalga oshiramiz va Layout'larni publishing qilamiz

// Darsimiz rejasi:
// 1) SASS o'zi nima va u bizga qanday imkoniyatlarni taqdim etadi
// 2) SASS'ni loyihamizga o'rnatamiz
// 3) Layoutlarimiz Header va Footer publishingini amalga oshiramiz

// ---------------------------------------------------

// SASS => Syntactically Awesome Style Sheets
// SCSS => Sassy Cascading Style Sheets

// SASS => CSS'ni extension language'i hisoblanadi
// TypeScript => JavaScript'ni extension language'i hisoblanadi

// SASS fayllarini hosil qilish uchun, yangi ochilgan faylni nomi yakuni .scss yoki .sass bilan tugashi kerak

// SASS'da variable'larni dollar belgisidan ($) foydalanib hosil qilamiz
// SASS'da class name nesting tizimini hosil qila olamiz
// SASS'da mixin'lardan foydalana olamiz

// Nestar loyihamizda SCSS'dan foydalanamiz

// $font: 'Poppins', sans-serif; => dollar belgisi ($) orqalik font variable hosil qilindi

// ---------------------------------------------------

// 120th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-21
// 121th Lesson
// HomePage sahifasini publishing qilamiz

// Darsimiz rejasi:
// 1) SASS mantig'ini qayta mushohada etamiz
// 2) HomePage sahifamizni publish qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 121th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-22
// 120th Lesson
// Products list sahifasini publishing qilamiz

// Darsimiz rejasi:
// 1) Products list sahifasini publishing qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 120th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-25
// 123th Lesson
// Loyihamizning Mobile versiyasini hosil etamiz va GraphQL Apollo client
// connection'ni tashkil etamiz

// Darsimiz rejasi:
// 1) Nestar loyihamizning Mobile versiyasini quramiz
// 2) GrahpQL Apollo client orqalik backend'imizga connection'ni amalga oshiramiz
// 3) Apollo GraphQL client orqali Frontend'da getProperties API'ini test qilamiz

// ---------------------------------------------------

// ---------------------------------------------------

// 123th shu yerda yakunlandi
// 수고 하셨습니다!

// =================================================================

// 2024-09-25
// 124th Lesson
// Nestar loyihamizning publishing'ini complex tahlil qilamiz

// Darsimiz rejasi:
// 1) Nestar loyihamizning publishing qismi va unda ishlatiladigan tool'larni tahlil etamiz
// 2) Loyihamizning GraphQL Apollo client tizimini tahlil etamiz
// 3) Loyihamizning member'lar uchun mo'jallangan Authentication jarayonini mushohada etamiz

// ---------------------------------------------------

// GrahpQL backend server'ga 3 xil ko'rinishda request'larni amalga oshirishimiz mumkin:
// 1) React Query orqalik (useQuery, useMutation)
// 2) Apollo Clinet'ning query & mutation mantiqlarini request tarzida amalga oshirishimiz mumkin
// 3) Axios orqalik ham GraphQL request mantiqlarini amalga oshirishimiz mumkin

// useQuery & useMutation hook'larini doim istalgan joyda ishlata olmaymiz. Va bunday vaziyatda
// Apollo Client orqalik instance olib, uning query & mutaion request mantiqlaridan foydalanishimiz mumkin


// Odatda ko'pincha, React Query oqalik GraphQL request'larni amalga oshirishimiz mumkin.


// makeVar => Reactive Variable'larni xosil qilib beradi. 
// Reative variable'lar context mantig'i kabi bir xil ishlaydi

// ---------------------------------------------------

// 124th shu yerda yakunlandi
// 수고 하셨습니다!

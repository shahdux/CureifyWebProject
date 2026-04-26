import React from 'react';
import "./BlogDetails.css";
import Navbar from '../components/Navbar';
import calendaricon from "../assets/calendaricon.svg";
import clockicon from "../assets/clockicon.svg";
import authoricon from "../assets/authoricon.svg";
import backarrow from "../assets/back.svg";
import blogone from "../assets/blogone.svg";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.svg";
import { Link, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { useLang } from '../context/LanguageContext';

const BlogDetails = () => {
    const { isArabic } = useLang();

    const allblogs = {
        blog1: {
            name_en: "How to Stay Consistent with Your Medication",
            name_ar: "كيفية البقاء متسقًا مع أدويتك",
            image: blogone,
            date: "March 1, 2025",
            read_time: "5 min read",
            author: "Dr. Sarah Mitchell",
            intro_en: "Building habits is easier than you think. Consistency comes from small, repeatable actions that fit naturally into your daily routine — turning medication into a simple, stress-free part of your day rather than something you have to constantly remind yourself to do. Over time, these small actions build confidence, reduce missed doses, and help you feel more in control of your health.",
            intro_ar: "بناء العادات أسهل مما تعتقد. يأتي الاتساق من خلال إجراءات صغيرة متكررة تتلاءم بشكل طبيعي مع روتينك اليومي، مما يحول تناول الدواء إلى جزء بسيط وخالٍ من التوتر في يومك بدلاً من شيء عليك تذكره باستمرار. مع مرور الوقت، تبني هذه الإجراءات الصغيرة ثقتك بنفسك وتقلل من الجرعات الفائتة.",
            heading1_en: "Why Consistency Matters",
            heading1_ar: "لماذا تُعدّ الاستمرارية مهمة",
            body1_en: "Taking medication consistently is crucial for managing chronic conditions and maintaining your overall health. When medications are taken irregularly, their effectiveness can be significantly reduced, potentially leading to complications or the need for more intensive treatments. Many medications work by maintaining a steady level in your bloodstream — missing doses disrupts this balance and can undo days of progress. Doctors design dosing schedules specifically to keep your body in a therapeutic range, and straying from that schedule, even occasionally, can have real consequences on how well your treatment works.",
            body1_ar: "يُعدّ تناول الأدوية بانتظام أمرًا بالغ الأهمية لإدارة الحالات المزمنة والحفاظ على صحتك العامة. عند تناول الأدوية بشكل غير منتظم، قد تنخفض فعاليتها بشكل كبير، مما قد يؤدي إلى مضاعفات أو الحاجة إلى علاجات أكثر كثافة. تعمل كثير من الأدوية عن طريق الحفاظ على مستوى ثابت في مجرى الدم، وتفويت الجرعات يعطل هذا التوازن ويمكن أن يُلغي أيامًا من التقدم.",
            heading2_en: "Link It to an Existing Habit",
            heading2_ar: "اربطها بعادة موجودة بالفعل",
            body2_en: "The most effective way to remember your medication is to attach it to something you already do every day. This could be brushing your teeth, having your morning coffee, or eating breakfast. By creating this association, you're leveraging an existing habit to build a new one — a technique known as habit stacking. For example, if you take medication with breakfast, keep your pills next to your coffee maker or cereal box. The visual cue will remind you before you even sit down to eat. Studies show that people who pair new behaviors with established routines are significantly more likely to stick with them long term.",
            body2_ar: "أكثر الطرق فعالية لتذكر دوائك هي ربطها بشيء تفعله بالفعل كل يوم، مثل تنظيف أسنانك أو شرب قهوتك الصباحية أو تناول الإفطار. من خلال إنشاء هذا الارتباط، فإنك تستفيد من عادة قائمة لبناء عادة جديدة — وهي تقنية تُعرف بـ'تكديس العادات'. تُظهر الدراسات أن الأشخاص الذين يقرنون السلوكيات الجديدة بالروتين الراسخ أكثر عرضة للالتزام بها على المدى الطويل.",
            heading3_en: "Use Technology to Your Advantage",
            heading3_ar: "استخدم التكنولوجيا لصالحك",
            body3_en: "Set daily alarms on your phone at the exact time you need to take your medication. Many smartphones also have dedicated medication reminder apps that can track when you've taken your dose, send you follow-up notifications if you miss one, and even generate adherence reports to share with your doctor. Smart pill bottles and dispensers are another option — they can alert you when it's time to take your medication and notify a family member if you forget. Wearable devices like smartwatches can also deliver gentle vibration reminders directly to your wrist, making it even harder to ignore a missed dose.",
            body3_ar: "اضبط منبهات يومية على هاتفك في الوقت المحدد لتناول دوائك. تحتوي كثير من الهواتف الذكية أيضًا على تطبيقات تذكير مخصصة للأدوية يمكنها تتبع متى تناولت جرعتك، وإرسال إشعارات متابعة إذا فاتتك، وحتى إنشاء تقارير الالتزام لمشاركتها مع طبيبك. تُعدّ زجاجات الحبوب الذكية والموزعات خيارًا آخر — يمكنها تنبيهك عندما يحين وقت تناول دوائك وإخطار أحد أفراد العائلة إذا نسيت.",
        },
        blog2: {
            name_en: "Why Medication Adherence Matters",
            name_ar: "لماذا يهم الالتزام بالأدوية؟",
            image: blog3,
            date: "March 15, 2025",
            read_time: "6 min read",
            author: "Dr. Lena Hassan",
            intro_en: "Skipping a dose might seem like a small thing in the moment, but the cumulative impact on recovery and chronic condition management can be far greater than most people realize. Medication adherence is one of the most powerful tools you have for protecting your long-term health — and one of the most commonly overlooked. Understanding why it matters is the first step toward making it a true priority in your daily life.",
            intro_ar: "قد يبدو تخطي الجرعة أمرًا صغيرًا في اللحظة، لكن التأثير التراكمي على التعافي وإدارة الحالات المزمنة قد يكون أكبر بكثير مما يدرك معظم الناس. يُعدّ الالتزام بالأدوية أحد أقوى الأدوات المتاحة لحماية صحتك على المدى البعيد، وواحدًا من أكثر الأشياء التي يتم تجاهلها شيوعًا.",
            heading1_en: "The Cost of Non-Adherence",
            heading1_ar: "تكلفة عدم الالتزام",
            body1_en: "Non-adherence to medication is one of the leading causes of preventable hospitalizations worldwide, costing healthcare systems billions of dollars annually and, more importantly, costing patients their quality of life. When people don't take their medications as prescribed, conditions that were previously under control can rapidly deteriorate. For patients managing diabetes, hypertension, or heart disease, even a few missed doses can result in dangerous spikes or drops that require emergency intervention. Beyond the immediate health risks, non-adherence often leads to doctors increasing dosages or switching to stronger medications — outcomes that could have been avoided entirely.",
            body1_ar: "يُعدّ عدم الالتزام بالأدوية من الأسباب الرئيسية للدخول إلى المستشفى يمكن تجنبها على مستوى العالم، مما يكلف أنظمة الرعاية الصحية مليارات الدولارات سنويًا، والأهم من ذلك، يكلف المرضى جودة حياتهم. عندما لا يتناول الناس أدويتهم كما هو موصوف، يمكن أن تتدهور الحالات التي كانت تحت السيطرة بسرعة. بالنسبة للمرضى الذين يعانون من السكري أو ارتفاع ضغط الدم أو أمراض القلب، حتى بضع جرعات فائتة يمكن أن تؤدي إلى ارتفاعات أو انخفاضات خطيرة تستلزم تدخلًا طارئًا.",
            heading2_en: "How to Improve Adherence",
            heading2_ar: "كيفية تحسين الالتزام",
            body2_en: "Simple tools like pill organizers, reminder apps, and regular check-ins with your doctor can dramatically improve how consistently you take your medication. But improving adherence also starts with understanding — many people skip doses because they don't fully understand why a medication is important, or because they fear side effects. Having an open conversation with your pharmacist or physician about what each medication does and what to expect can dramatically reduce this uncertainty. Building a support system, whether through a trusted family member or a digital tracking tool, adds an extra layer of accountability that many patients find invaluable.",
            body2_ar: "أدوات بسيطة مثل منظمات الحبوب وتطبيقات التذكير والمتابعة المنتظمة مع طبيبك يمكن أن تحسن الالتزام بشكل كبير. لكن تحسين الالتزام يبدأ أيضًا بالفهم — كثير من الناس يتخطون الجرعات لأنهم لا يفهمون تمامًا سبب أهمية الدواء، أو لأنهم يخشون الآثار الجانبية. إجراء محادثة مفتوحة مع الصيدلاني أو الطبيب حول ما يفعله كل دواء وما يمكن توقعه يمكن أن يقلل بشكل كبير من هذا الغموض.",
            heading3_en: "Building Long-Term Habits",
            heading3_ar: "بناء عادات طويلة الأمد",
            body3_en: "Adherence isn't just about remembering to take a pill — it's about building a sustainable relationship with your treatment plan. Start by setting realistic expectations: it takes time for most medications to show their full effect, and that waiting period can be discouraging. Tracking your progress, even informally, helps you see the bigger picture. Celebrate small wins — a full week of consistent doses, a positive lab result, a symptom that's eased. These milestones reinforce the connection between your effort and your health outcomes, making it easier to stay committed over the long run.",
            body3_ar: "الالتزام لا يتعلق فقط بتذكر تناول حبة دواء — بل يتعلق ببناء علاقة مستدامة مع خطة علاجك. ابدأ بتحديد توقعات واقعية: يستغرق معظم الأدوية وقتًا لإظهار تأثيرها الكامل، وفترة الانتظار هذه قد تكون محبطة. يساعدك تتبع تقدمك، حتى بشكل غير رسمي، على رؤية الصورة الكبيرة. احتفل بالانتصارات الصغيرة — أسبوع كامل من الجرعات المتسقة، ونتيجة مختبرية إيجابية، وعَرَض خُفّف. هذه المعالم تعزز الارتباط بين جهدك ونتائج صحتك.",
        },
        blog3: {
            name_en: "Understanding Your Blood Test Results",
            name_ar: "فهم نتائج فحص الدم",
            image: blog2,
            date: "March 20, 2025",
            read_time: "7 min read",
            author: "Dr. Omar Fathy",
            intro_en: "Decode the numbers. We break down the most common lab markers and what they actually mean for your personalized health plan. Blood tests are one of the most powerful diagnostic tools available to your doctor, yet most patients leave the clinic without truly understanding what their results say about their health. This guide walks you through the key markers, what normal ranges look like, and when you should be asking more questions.",
            intro_ar: "فك رموز الأرقام. نقوم بتحليل العلامات المخبرية الأكثر شيوعًا وما تعنيه فعليًا بالنسبة لخطتك الصحية الشخصية. تُعدّ فحوصات الدم واحدة من أقوى أدوات التشخيص المتاحة لطبيبك، ومع ذلك يغادر معظم المرضى العيادة دون أن يفهموا حقًا ما تقوله نتائجهم عن صحتهم.",
            heading1_en: "CBC — Complete Blood Count",
            heading1_ar: "CBC — تعداد الدم الكامل",
            body1_en: "A CBC measures different components of your blood including red blood cells, white blood cells, and platelets — giving doctors a broad overview of your general health. Red blood cell counts and hemoglobin levels can reveal anemia, while elevated white blood cell counts may indicate infection or inflammation. Platelet counts are essential for understanding how well your blood clots. Doctors use CBC results alongside your symptoms and medical history to build a fuller picture of what's happening in your body. It's one of the most frequently ordered tests precisely because it covers so much ground in a single draw.",
            body1_ar: "يقيس CBC مكونات مختلفة من دمك بما في ذلك خلايا الدم الحمراء والبيضاء والصفائح الدموية، مما يمنح الأطباء نظرة عامة شاملة على صحتك العامة. يمكن أن تكشف أعداد خلايا الدم الحمراء ومستويات الهيموجلوبين عن فقر الدم، بينما قد تشير أعداد خلايا الدم البيضاء المرتفعة إلى وجود عدوى أو التهاب. يستخدم الأطباء نتائج CBC إلى جانب أعراضك وتاريخك الطبي لبناء صورة أكمل عما يحدث في جسمك.",
            heading2_en: "Cholesterol & Lipid Panel",
            heading2_ar: "لوحة الكوليسترول والدهون",
            body2_en: "Your lipid panel shows your HDL, LDL, and triglyceride levels — key indicators of cardiovascular risk that guide both diet and medication decisions. HDL is often called 'good' cholesterol because it helps remove other forms of cholesterol from your bloodstream. LDL, on the other hand, is the type that can build up in artery walls and increase the risk of heart disease and stroke. Triglycerides are a type of fat in your blood that rise when you consume more calories than your body burns, particularly from sugary or processed foods. Your doctor will look at all three numbers together — not in isolation — to assess your overall cardiovascular health.",
            body2_ar: "تُظهر لوحة الدهون مستويات HDL وLDL والدهون الثلاثية — مؤشرات رئيسية لمخاطر القلب والأوعية الدموية التي توجه قرارات النظام الغذائي والدواء. كثيرًا ما يُطلق على HDL اسم الكوليسترول 'الجيد' لأنه يساعد على إزالة أشكال أخرى من الكوليسترول من مجرى الدم. أما LDL فهو النوع الذي يمكن أن يتراكم في جدران الشرايين ويزيد من خطر الإصابة بأمراض القلب والسكتة الدماغية. سينظر طبيبك في الأرقام الثلاثة معًا — وليس بمعزل عن بعضها — لتقييم صحتك القلبية الوعائية الإجمالية.",
            heading3_en: "Blood Sugar & HbA1c",
            heading3_ar: "سكر الدم والهيموجلوبين الغليكوزيلاتي",
            body3_en: "Fasting blood glucose measures your blood sugar after at least 8 hours without eating, giving a snapshot of how your body manages glucose at rest. HbA1c, however, tells a longer story — it reflects your average blood sugar levels over the past two to three months by measuring the percentage of hemoglobin that has glucose attached to it. This makes it particularly valuable for monitoring diabetes and prediabetes, as it can't be skewed by a single good or bad day. If your HbA1c is trending upward over time, it's a clear signal that your blood sugar management needs attention, even if your fasting glucose occasionally looks normal.",
            body3_ar: "يقيس سكر الدم أثناء الصيام مستوى السكر في دمك بعد 8 ساعات على الأقل دون تناول الطعام، مما يعطي لقطة حول كيفية إدارة جسمك للجلوكوز في حالة الراحة. أما HbA1c فيحكي قصة أطول — إذ يعكس متوسط مستويات سكر الدم على مدى الشهرين إلى الثلاثة أشهر الماضية عن طريق قياس نسبة الهيموجلوبين الذي يحتوي على الجلوكوز. إذا كان HbA1c لديك يرتفع بمرور الوقت، فهذه إشارة واضحة إلى أن إدارة سكر الدم لديك تحتاج إلى اهتمام.",
        },
        blog4: {
            name_en: "Tips for Managing Prescriptions Stress-Free",
            name_ar: "نصائح لإدارة الوصفات الطبية بدون توتر",
            image: blog4,
            date: "April 1, 2025",
            read_time: "4 min read",
            author: "Dr. Mona Samir",
            intro_en: "Tired of pharmacy runs and refill anxiety? You're not alone. Managing multiple prescriptions is one of the most common sources of stress for patients with chronic conditions — and one of the most solvable. With the right systems in place, you can automate most of the friction out of your medication routine and spend less mental energy on logistics and more on actually feeling well.",
            intro_ar: "هل سئمت من الذهاب المتكرر إلى الصيدلية والقلق بشأن إعادة صرف الأدوية؟ لست وحدك. تُعدّ إدارة الوصفات الطبية المتعددة واحدة من أكثر مصادر التوتر شيوعًا لمرضى الحالات المزمنة. مع وضع الأنظمة الصحيحة في مكانها، يمكنك أتمتة معظم الاحتكاك في روتين أدويتك.",
            heading1_en: "Auto-Refill Services",
            heading1_ar: "خدمات إعادة الملء التلقائي",
            body1_en: "Many pharmacies offer automatic refill programs that send your prescription before you run out — eliminating last-minute stress entirely. Once enrolled, the pharmacy monitors your refill schedule and contacts your insurance automatically. Some services even offer home delivery, meaning you never have to make a trip to the pharmacy at all. If your pharmacy doesn't offer this, ask your doctor about a 90-day prescription supply — fewer refills means fewer chances to run out. Many insurance plans actually offer lower co-pays for 90-day supplies as an added incentive.",
            body1_ar: "تقدم كثير من الصيدليات برامج إعادة ملء تلقائية ترسل وصفتك قبل نفادها، مما يُلغي التوتر اللحظي تمامًا. بمجرد التسجيل، تراقب الصيدلية جدول إعادة الملء الخاص بك وتتصل بتأمينك تلقائيًا. بعض الخدمات تقدم حتى التوصيل المنزلي، مما يعني أنك لن تضطر إلى الذهاب إلى الصيدلية على الإطلاق. إذا لم تقدم صيدليتك هذه الخدمة، اسأل طبيبك عن وصفة لمدة 90 يومًا.",
            heading2_en: "Organizing Multiple Prescriptions",
            heading2_ar: "تنظيم وصفات متعددة",
            body2_en: "Using a single pharmacy for all your medications makes it easier to track drug interactions, manage pickups, and maintain a consistent medication history. When all your prescriptions are in one place, your pharmacist can flag potential interactions that might be missed if you're filling scripts at different locations. Invest in a weekly pill organizer with labeled compartments for morning, afternoon, and evening — this way you can see at a glance whether you've taken your doses for the day. For those managing many medications, a simple spreadsheet or medication management app can serve as a master reference for dosages, timing, and refill dates.",
            body2_ar: "استخدام صيدلية واحدة لجميع أدويتك يجعل تتبع تفاعلات الأدوية وإدارة الاستلام والحفاظ على تاريخ دوائي متسق أسهل. عندما تكون جميع وصفاتك في مكان واحد، يمكن للصيدلاني الإشارة إلى التفاعلات المحتملة. استثمر في منظم حبوب أسبوعي بحجرات مُعلَّمة للصباح والظهيرة والمساء — بهذه الطريقة يمكنك رؤية ما إذا كنت قد تناولت جرعاتك اليوم بنظرة واحدة.",
            heading3_en: "Communicating with Your Doctor",
            heading3_ar: "التواصل مع طبيبك",
            body3_en: "One of the most underutilized tools in prescription management is simply talking to your doctor. If a medication is too expensive, ask about generics or patient assistance programs — most physicians are happy to help find alternatives. If a dosing schedule is inconvenient, ask whether a once-daily formulation exists. If side effects are making you want to stop taking a medication, bring that up immediately rather than quietly discontinuing. Doctors can only optimize your treatment plan with the information you give them, and an honest conversation is often all it takes to resolve issues that patients silently struggle with for months.",
            body3_ar: "أحد أكثر الأدوات غير المستخدمة في إدارة الوصفات الطبية هو ببساطة التحدث مع طبيبك. إذا كان الدواء مكلفًا للغاية، اسأل عن الأدوية الجنيسة أو برامج مساعدة المرضى. إذا كان جدول الجرعات غير مريح، اسأل عما إذا كانت هناك صيغة مرة واحدة يوميًا. يمكن للأطباء فقط تحسين خطة علاجك بالمعلومات التي تمنحهم إياها، وغالبًا ما يكون حديث صادق كل ما يلزم لحل المشكلات.",
        },
        blog5: {
            name_en: "The Link Between Adherence and Anxiety",
            name_ar: "العلاقة بين الالتزام بالعلاج والقلق",
            image: blog5,
            date: "April 5, 2025",
            read_time: "5 min read",
            author: "Dr. Yara Nabil",
            intro_en: "The relationship between mental health and medication adherence is more intertwined than most people realize. Anxiety doesn't just affect how you feel — it can directly interfere with your ability to stick to a treatment plan, creating a frustrating cycle where poor adherence worsens symptoms, and worsening symptoms make adherence feel even harder. Understanding this cycle is the first step toward breaking it.",
            intro_ar: "العلاقة بين الصحة النفسية والالتزام بالأدوية أكثر تشابكًا مما يدرك معظم الناس. القلق لا يؤثر فقط على طريقة شعورك — بل يمكن أن يتعارض مباشرة مع قدرتك على الالتزام بخطة علاجية، مما يخلق حلقة محبطة حيث يزيد ضعف الالتزام من الأعراض، وتجعل الأعراض المتفاقمة الالتزام أصعب.",
            heading1_en: "How Anxiety Affects Adherence",
            heading1_ar: "كيف يؤثر القلق على الالتزام",
            body1_en: "Anxiety can cause patients to avoid taking medication out of fear of side effects, creating a cycle that worsens both the anxiety and the underlying condition. This phenomenon, sometimes called 'pharmacophobia,' is more common than doctors once believed. Patients may read the side effect list on a medication leaflet and become so focused on rare or unlikely outcomes that they convince themselves the treatment is more dangerous than the disease. Others experience anticipatory anxiety — a sense of dread before taking each dose — that makes the simple act of swallowing a pill feel emotionally exhausting. Recognizing that this anxiety is real and valid is an important starting point.",
            body1_ar: "يمكن أن يتسبب القلق في تجنب المرضى تناول الدواء خوفًا من الآثار الجانبية، مما يخلق حلقة تُفاقم القلق والحالة الأساسية معًا. هذه الظاهرة، التي تُعرف أحيانًا بـ'رهاب الأدوية'، أكثر شيوعًا مما اعتقد الأطباء في السابق. قد يقرأ المرضى قائمة الآثار الجانبية على نشرة الدواء ويصبحون منشغلين جدًا بالنتائج النادرة أو غير المحتملة لدرجة أنهم يقنعون أنفسهم بأن العلاج أخطر من المرض.",
            heading2_en: "Breaking the Cycle",
            heading2_ar: "كسر الحلقة المفرغة",
            body2_en: "Working with a doctor or therapist to address medication-related anxiety is key. Small steps, like starting with a lower dose and gradually increasing, can help build confidence gradually. Cognitive behavioral therapy (CBT) has been shown to be particularly effective for patients who experience health anxiety or fear of medication, helping them reframe their relationship with treatment. Keeping a symptom and mood journal can also help patients see concrete evidence that their medication is working, which reinforces the motivation to continue. Support groups, both in-person and online, offer another layer of reassurance — hearing from others who have overcome similar fears can be powerfully validating.",
            body2_ar: "العمل مع طبيب أو معالج نفسي لمعالجة القلق المرتبط بالدواء هو المفتاح. الخطوات الصغيرة، مثل البدء بجرعة أقل والزيادة التدريجية، يمكن أن تساعد في بناء الثقة تدريجيًا. ثبت أن العلاج السلوكي المعرفي فعّال بشكل خاص للمرضى الذين يعانون من قلق صحي أو خوف من الأدوية، مما يساعدهم على إعادة صياغة علاقتهم بالعلاج. يمكن أن يساعد الاحتفاظ بمجلة للأعراض والمزاج المرضى على رؤية دليل ملموس على أن دوائهم يعمل.",
            heading3_en: "When to Seek Additional Support",
            heading3_ar: "متى تطلب دعمًا إضافيًا",
            body3_en: "If anxiety around medication is significantly impacting your quality of life or causing you to skip doses regularly, it's important to seek additional professional support rather than trying to push through on your own. Speak openly with your prescribing doctor about your concerns — they may be able to adjust your regimen, switch you to a medication with a more tolerable side effect profile, or refer you to a mental health professional who specializes in health anxiety. You don't have to choose between your physical and mental health; with the right support team, both can be addressed simultaneously and compassionately.",
            body3_ar: "إذا كان القلق المتعلق بالأدوية يؤثر بشكل كبير على جودة حياتك أو يتسبب في تخطي الجرعات بانتظام، فمن المهم طلب دعم مهني إضافي بدلاً من محاولة المضي قدمًا بمفردك. تحدث بصراحة مع طبيبك المعالج حول مخاوفك — قد يتمكن من تعديل نظامك أو تحويلك إلى متخصص في الصحة النفسية. لا يتعين عليك الاختيار بين صحتك الجسدية والنفسية؛ مع فريق الدعم المناسب، يمكن معالجة كليهما في آنٍ واحد.",
        },
        blog6: {
            name_en: "The Role of Technology in Modern Healthcare",
            name_ar: "دور التكنولوجيا في الرعاية الصحية الحديثة",
            image: blog6,
            date: "March 10, 2025",
            read_time: "4 min read",
            author: "Dr. Ahmed Khalil",
            intro_en: "From AI diagnostics to smart medication reminders, technology is transforming the way we manage our health — making personalized, proactive care more accessible than ever before. What was once the domain of specialists and hospital systems is now increasingly available in the palm of your hand. This shift represents not just a change in tools, but a fundamental rethinking of what it means to be an active participant in your own healthcare.",
            intro_ar: "من التشخيص بالذكاء الاصطناعي إلى تذكيرات الأدوية الذكية، تُحوّل التكنولوجيا طريقة إدارتنا لصحتنا — مما يجعل الرعاية الشخصية الاستباقية أكثر سهولة في الوصول من أي وقت مضى. ما كان في السابق حكرًا على المتخصصين وأنظمة المستشفيات أصبح متاحًا بشكل متزايد في متناول يدك.",
            heading1_en: "AI in Diagnostics",
            heading1_ar: "الذكاء الاصطناعي في التشخيص",
            body1_en: "Artificial intelligence is helping doctors detect diseases earlier and more accurately than ever before, improving patient outcomes across many fields of medicine. AI algorithms trained on millions of medical images can now identify early signs of conditions like diabetic retinopathy, skin cancer, and lung nodules with accuracy that rivals or exceeds experienced specialists. In radiology, AI tools can flag subtle abnormalities in X-rays and MRIs that a fatigued radiologist might overlook during a long shift. Beyond imaging, natural language processing is being used to analyze patient records and identify patterns that might predict disease before symptoms appear — opening the door to a truly preventive model of care.",
            body1_ar: "يساعد الذكاء الاصطناعي الأطباء على اكتشاف الأمراض في وقت مبكر وبدقة أكبر من أي وقت مضى، مما يحسن نتائج المرضى في كثير من مجالات الطب. يمكن لخوارزميات الذكاء الاصطناعي المدربة على ملايين الصور الطبية الآن تحديد العلامات المبكرة لحالات مثل اعتلال الشبكية السكري وسرطان الجلد والعقيدات الرئوية بدقة تنافس المتخصصين ذوي الخبرة أو تتجاوزهم.",
            heading2_en: "Smart Reminders & Wearables",
            heading2_ar: "التذكيرات الذكية والأجهزة القابلة للارتداء",
            body2_en: "Wearable devices and smart apps now track vitals, activity, and medication schedules in real time — putting health management in the patient's hands like never before. Modern smartwatches can monitor heart rate, blood oxygen levels, sleep quality, and even detect irregular heart rhythms that may indicate atrial fibrillation. Continuous glucose monitors allow diabetic patients to track their blood sugar throughout the day without repeated finger pricks, and can send alerts when levels move outside a safe range. These devices don't replace clinical care, but they close the gap between doctor's visits, giving both patients and physicians a much richer stream of data to work with.",
            body2_ar: "تتتبع الأجهزة القابلة للارتداء والتطبيقات الذكية الآن العلامات الحيوية والنشاط ومواعيد الأدوية في الوقت الفعلي. يمكن للساعات الذكية الحديثة مراقبة معدل ضربات القلب ومستويات الأكسجين في الدم وجودة النوم وحتى اكتشاف عدم انتظام ضربات القلب. تسمح أجهزة مراقبة الجلوكوز المستمرة لمرضى السكري بتتبع مستوى سكر الدم طوال اليوم دون وخز الإصبع المتكرر. هذه الأجهزة لا تحل محل الرعاية السريرية، لكنها تسد الفجوة بين زيارات الطبيب.",
            heading3_en: "Telemedicine & The Future of Care",
            heading3_ar: "الطب عن بُعد ومستقبل الرعاية",
            body3_en: "Telemedicine has moved from a niche convenience to a mainstream pillar of healthcare delivery, accelerated by the pandemic but here to stay for good reason. Video consultations allow patients in remote areas to access specialists they could never reach in person, and follow-up appointments that once required a half-day off work can now happen in a 15-minute video call from home. As technology continues to evolve, the integration of AI, wearables, and telemedicine promises a future where healthcare is not just reactive — responding to illness after it strikes — but genuinely predictive and preventive, catching problems before they become crises.",
            body3_ar: "انتقل الطب عن بُعد من وسيلة راحة متخصصة إلى ركيزة رئيسية لتقديم الرعاية الصحية. تتيح استشارات الفيديو للمرضى في المناطق النائية الوصول إلى متخصصين لم يتمكنوا من الوصول إليهم شخصيًا. مع استمرار تطور التكنولوجيا، يعد تكامل الذكاء الاصطناعي والأجهزة القابلة للارتداء والطب عن بُعد بمستقبل تكون فيه الرعاية الصحية ليست مجرد رد فعل على المرض، بل تنبؤية حقًا ووقائية، تكتشف المشكلات قبل أن تصبح أزمات.",
        }
    };

    const { key } = useParams();
    const detailsblog = allblogs[key];

    return (
        <>
            <div className='center'>
                <Navbar />
            </div>

            <div className='blogdetails-container'>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                    <p className='jobapp-back'>
                        <img src={backarrow} alt="back" className='jobapp-back-icon' />
                        {isArabic ? 'العودة إلى المدونات' : 'Back to Blogs'}
                    </p>
                </Link>

                <div className='blogdetails-card'>
                    <img src={detailsblog.image} alt="blog" className='blogdetails-img' />

                    <div className='blogdetails-content'>
                        <h1 className='blogdetails-title'>
                            {isArabic ? detailsblog.name_ar : detailsblog.name_en}
                        </h1>

                        <div className='blogdetails-meta'>
                            <div className='blogdetails-meta-item'>
                                <img src={calendaricon} alt="date" className='blogdetails-meta-icon' />
                                <p className='blogdetails-meta-text'>{detailsblog.date}</p>
                            </div>
                            <div className='blogdetails-meta-item'>
                                <img src={clockicon} alt="read time" className='blogdetails-meta-icon' />
                                <p className='blogdetails-meta-text'>{detailsblog.read_time}</p>
                            </div>
                            <div className='blogdetails-meta-item'>
                                <img src={authoricon} alt="author" className='blogdetails-meta-icon' />
                                <p className='blogdetails-meta-text'>{detailsblog.author}</p>
                            </div>
                        </div>

                        <p className='blogdetails-intro'>
                            {isArabic ? detailsblog.intro_ar : detailsblog.intro_en}
                        </p>

                        <h2 className='blogdetails-h2'>
                            {isArabic ? detailsblog.heading1_ar : detailsblog.heading1_en}
                        </h2>
                        <p className='blogdetails-p'>
                            {isArabic ? detailsblog.body1_ar : detailsblog.body1_en}
                        </p>

                        <h2 className='blogdetails-h2'>
                            {isArabic ? detailsblog.heading2_ar : detailsblog.heading2_en}
                        </h2>
                        <p className='blogdetails-p'>
                            {isArabic ? detailsblog.body2_ar : detailsblog.body2_en}
                        </p>

                        <h2 className='blogdetails-h2'>
                            {isArabic ? detailsblog.heading3_ar : detailsblog.heading3_en}
                        </h2>
                        <p className='blogdetails-p'>
                            {isArabic ? detailsblog.body3_ar : detailsblog.body3_en}
                        </p>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogDetails;
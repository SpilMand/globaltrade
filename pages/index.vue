<!-- eslint-disable max-len -->
<template>
  <s-intro :title="introTitle" />
  <s-about :title="aboutTitle" :info="aboutInfo" />
  <s-advantages :title="advantagesTitle" :content="cardContent" />
  <s-program :title="programTitle" :content="programContent" />
  <div id="form" class="l-default">
    <s-form-classic :content="form1" @action="sendForm" />
  </div>
  <s-benefit :title="benefitTitle" :content="benefitContent" />
  <s-speakers :title="speakersTitle" :content="speakersContent" />
  <div class="l-default">
    <s-form :content="form2" @action="sendForm" />
  </div>
</template>

<script setup>
import { landerStore } from '~/plugins/2.lander.client';
import registration from '~/api/registration/courseRegistration';

const emit = defineEmits(['setMenuItems']);

onMounted(() => {
  landerStore.updateLander({ land: 'business_usa' });
  emit('setMenuItems', headerMenu.value);
});

const headerMenu = ref([
  {
    text: 'Для кого',
    target: '.s-advantages',
  },
  {
    text: 'Программа',
    target: '.s-program',
  },
  {
    text: 'Преимущества',
    target: '.s-benefit',
  },
  {
    text: 'Кто мы',
    target: '.s-about',
  },
]);

const introTitle = ref('Бизнес в Америке');
const aboutTitle = ref('Кто мы');
const aboutInfo = ref({
  span_text: `Synergy Global Trade –`,
  text_title: 'международная компания со штаб-квартирой в Нью-Йорке, основанная в 2016 году',
  text_subtitle:
    // eslint-disable-next-line max-len
    'специализирующаяся на вопросах поддержки импорта и экспорта товаров, организации процесса ввоза и продаж продукции и услуг в США, обучении предпринимателей, а также комплексной поддержке иностранного бизнеса на американском рынке',
  img: '/images/s-about/about-1.png',
});
const speakersTitle = ref('Спикеры курса');
const advantagesTitle = ref('Для кого курс');
const benefitTitle = ref('Преимущества');
const cardContent = ref([
  {
    title: 'Новые резиденты США',
    subtitle: 'Для тех, кто недавно переехал в Америку и стремится эффективно адаптироваться, создав свой бизнес',
    icon: '/images/s-advantages/01.png',
  },
  {
    title: 'Лица, постоянно проживающие в США',
    subtitle:
      // eslint-disable-next-line max-len
      'Для тех, кто уже давно проживает в стране, но только сейчас решает начать свой первый бизнес, и ищет проверенное руководство для этого шага',
    icon: '/images/s-advantages/02.png',
  },
  {
    title: 'Будущие жители Америки',
    subtitle:
      // eslint-disable-next-line max-len
      'Для лиц, планирующих переезд в США, желающих заложить основу и подготовить почву для своих предпринимательских начинаний',
    icon: '/images/s-advantages/03.png',
  },
]);
const programTitle = ref('Программа курса');
const programContent = ref([
  {
    title: 'Открытие компании. Первые шаги',
    id: 0,
    isOpen: true,
    container: [
      {
        title: 'Регистрация компании в США',
        number: '01',
        list: [
          { text: 'Как и где зарегистрировать компанию?' },
          { text: 'Что лучше: аутсорсинг или регистрация своими силами?' },
          { text: 'Регистрация в Делавэре или в своем штате' },
        ],
      },
      {
        title: 'Особенности открытия банковского счета',
        number: '02',
        list: [
          { text: 'Что нужно для открытия счета в банке?' },
          { text: 'В какой банк лучше всего обращаться?' },
          { text: 'Как вести бизнес так, чтобы не закрыли счет?' },
        ],
      },
      {
        title: 'Бухгалтерия и налогообложение',
        number: '03',
        list: [
          { text: 'Как вести бухгалтерию компании?' },
          { text: 'Как и когда платить налоги?' },
          { text: 'Что такое правило Нексуса и какие еще есть тонкости?' },
        ],
      },
    ],
  },
  {
    title: 'Офис и персонал',
    id: 1,
    isOpen: false,
    container: [
      {
        title: 'Аренда офисных помещений: типы и стоимость',
        number: '01',
        list: [
          { text: 'Что нужно иметь на руках, чтобы арендовать офис?' },
          { text: 'Где и как искать правильный офис?' },
          { text: 'Плюсы и минусы форматов: как выбрать свой?' },
        ],
      },
      {
        title: 'Основные способы платежей и платежные методы',
        number: '02',
        list: [
          { text: 'Какие виды банковских платежей существуют и в чем их разница?' },
          { text: 'Как принимать платежи от клиентов и какие сервисы использовать?' },
          { text: 'Как экономить при получении и отправке платежей?' },
        ],
      },
      {
        title: 'Поиск и найм персонала в США',
        number: '03',
        list: [
          { text: 'Как найти специалиста и на что обращать внимание в резюме?' },
          { text: 'Как ориентироваться в рынке окладов?' },
          { text: 'Рекрутинговые сайты: какая в них разница и почему без них невозможно обойтись?' },
        ],
      },
    ],
  },
  {
    title: 'Анализ рынка и маркетинг',
    id: 2,
    isOpen: false,
    container: [
      {
        title: 'PR и маркетинг в США. Введение.',
        number: '01',
        list: [
          { text: 'Как устроен маркетинг в США?' },
          { text: 'Насколько эффективен маркетолог, работающий в другой стране?' },
          { text: 'Какую маркетинговую стратегию выбрать для бизнеса?' },
        ],
      },
      {
        title: 'Анализ конкурентов и сегментация рынка',
        number: '02',
        list: [
          { text: 'Кто он – американский покупатель?' },
          { text: 'Где найти информацию о рынке и ваших конкурентах?' },
          { text: 'Как самому провести анализ и составить портрет своего покупателя?' },
        ],
      },
      {
        title: 'Маркетинговые инструменты в США',
        number: '03',
        list: [
          { text: 'Как найти подход к американскому покупателю и влюбить в свой бренд?' },
          { text: 'Какие инструменты клиентского сервиса использовать в работе?' },
          { text: 'Какова роль клиентских отзывов для бизнеса?' },
        ],
      },
    ],
  },
  {
    title: 'Юридические аспекты',
    id: 3,
    isOpen: false,
    container: [
      {
        title: 'Трудовое законодательство в США.',
        number: '01',
        list: [
          { text: 'Какие тонкости трудового законодательства вы обязаны знать на старте?' },
          { text: 'Какие типы контрактов с сотрудниками существуют на рынке?' },
          { text: 'Как защитить себя и избежать возможных споров?' },
        ],
      },
      {
        title: 'Защита интеллектуальной собственности',
        number: '02',
        list: [
          { text: 'Что нужно знать о регистрации товарной марки в США?' },
          { text: 'Как устроено патентное право и как зарегистрировать патент?' },
          { text: 'Как защитить свой бренд или интеллектуальную собственность в Америке?' },
        ],
      },
      {
        title: 'Судебная система США',
        number: '03',
        list: [
          { text: 'Как устроена американская судебная система?' },
          { text: 'Сколько стоит разбирательство в суде?' },
          { text: 'Что нужно знать в качестве истца или ответчика?' },
        ],
      },
    ],
  },
  {
    title: 'Поиск идеи и инвестиции',
    id: 4,
    isOpen: false,
    container: [
      {
        title: 'Перспективные индустрии для бизнеса',
        number: '01',
        list: [
          { text: 'Какие три бизнес-ниши являются самыми перспективными в США?' },
          { text: 'Какие три бизнес-ниши востребованы уже сегодня?' },
          { text: 'Где искать идеи для бизнеса?' },
        ],
      },
      {
        title: 'Поиск инвестиций',
        number: '02',
        list: [
          { text: 'В чем разница между акселераторами, инкубаторами и бизнес-ангелами?' },
          { text: 'Как подать заявку в акселератор и на что обратить внимание?' },
          { text: 'Как подготовиться и успешно пройти интервью в акселератор?' },
        ],
      },
      {
        title: 'Стартап ScentBird. История создания и роста',
        number: '03',
        list: [
          { text: 'Какие ошибками допускают все стартапы в самом начале?' },
          { text: 'Как попасть в Y Combinator?' },
          { text: 'Что сделала компания, чтобы привлечь инвестиции в общей сложности в $30 млн?' },
        ],
      },
    ],
  },
  {
    title: 'Жизнь в США',
    id: 5,
    isOpen: false,
    container: [
      {
        title: 'Особенности менталитета',
        number: '01',
        list: [
          { text: 'Что важно знать при общении с американцами?' },
          { text: 'Как правильно вести переговоры, какие аргументы использовать?' },
          { text: 'Что категорически не стоит использовать в любых коммуникациях?' },
        ],
      },
      {
        title: 'Образование в США для детей',
        number: '02',
        list: [
          { text: 'Как устроена система дошкольного и школьного образования в США?' },
          { text: 'Как попасть в американский детский сад?' },
          { text: 'Какие тонкости школьного образования необходимо знать каждому?' },
        ],
      },
      {
        title: 'Высшее образование в США',
        number: '03',
        list: [
          { text: 'Как устроена система высшего образования в США?' },
          { text: 'Какой нужен уровень языка и как подготовиться к поступлению?' },
          { text: 'Как получить грант на образование в ВУЗе?' },
        ],
      },
      {
        title: 'Медицина и страховки в США',
        number: '04',
        list: [
          { text: 'Какие типы медицинских страховок есть в США?' },
          { text: 'Medicaid и Medicare – что нужно знать о страховках с господдержкой?' },
          { text: 'Как действовать в случае отказа страховой компании в выплате?' },
        ],
      },
    ],
  },
]);
const speakersContent = ref([
  {
    name: 'Рустам Мавланов',
    subtext: 'Организатор и спикер курса. Эксперт по ведению бизнеса в США.',
    image: '/images/s-speakers/photo-1.png',
    items: [
      // eslint-disable-next-line max-len
      `Основатель компании Synergy Global Trade, оказавшей услуги 250 компаниям из 22 стран мира, планирующим вход на американский рынок или уже работающим в США.`,
      // eslint-disable-next-line max-len
      `Организатор более 30 бизнес-мероприятий в США различного уровня (форумы, бизнес-миссии, корпоративные обучения) общей численностью более 15 000 человек`,
      `Доверенный партнер торгово-промышленной палаты штата Нью-Йорк по импортно-экспортным сервисам`,
      // eslint-disable-next-line max-len
      `Спикер более чем 100 различных бизнес-форумов в 12 странах мира на тему входа и ведения бизнеса на рынке США общей численностью более 150,000 человек`,
    ],
  },
  {
    name: 'Тимур Князев',
    subtext: 'СРА',
    image: '/images/s-speakers/photo-2.png',
    // eslint-disable-next-line max-len
    text: `Американский налоговый специалист, CPA и MST с более чем 20-летним опытом работы в различных отраслях, включая компании "Большой четверки" и Fortune 500. Автор книг, налоговый наставник и коуч со следующей специализацией:`,
    items: [
      `Глобальный налоговый учет и отчетность`,
      `Соблюдение требований федерального и местного налогообложения`,
      `Входящее и исходящее международное налогообложение, трансграничные сделки`,
      // eslint-disable-next-line max-len
      `Общие финансовые вопросы, капитал, бухгалтерский учет, управление капиталом, консолидации, признание доходов, вопросы внешней отчетности`,
    ],
  },
  {
    name: 'Екатерина Муратова',
    subtext: 'Attorney',
    image: '/images/s-speakers/photo-3.png',
    // eslint-disable-next-line max-len
    text: `Адвокат, руководитель «Immigration Center of Ekaterina Mouratova, PA» с более чем 15-летним опытом в юриспруденции США. Входит в список «10 Best Immigration Attorneys in Florida (2019)», выбираемых American Institute of Legal Counsel. Спикер юридических конференций и семинаров. Автор книг:`,
    items: ['The Complete Guide to the U.S. Immigration Law', 'Startup Law', 'Business Law for Entrepreneurs'],
  },
  {
    name: 'Ирина Проскурина',
    subtext: 'E-PR Online, CEO and Founder',
    image: '/images/s-speakers/photo-4.png',
    // eslint-disable-next-line max-len
    text: `Генеральный директор и основатель E-PR Online, цифровой платформы, базирующейся в Нью-Йорке. Платформа помогает сделать онлайн-публикации в самых известных мировых медиа, чтобы помочь людям и компаниям развивать свои бренды. В состав платформы входит 15 000 медиа, охватывающих 100 стран.`,
    items: [
      `Предприниматель, эксперт в PR и журналистике`,
      `Начинала карьеру в модельном бизнесе, работая с такими брендами, как Armani, Hugo Boss, and L'Oreal`,
      `Мама двоих детей`,
    ],
  },
  {
    name: 'Сергей Гусев',
    subtext: 'Scentbird, Cofounder',
    image: '/images/s-speakers/photo-5.png',
    // eslint-disable-next-line max-len
    text: `Соучредитель и главный операционный директор компании Scentbird, сервиса подписки на ароматы. Компания на своем старте прошла один из самых известных стартап-акселераторов – Ycombinator и на сегодняшний день смогла привлечь около 30 млн долларов инвестиций.`,
    items: [
      `Серийный предприниматель, продал свою первую компанию в возрасте 22 года`,
      `Большой опыт в управлении разработкой продуктов в сфере потребительских стартапов и управлении проектами`,
      `Сергей также известен своими навыками в геймификации и UI/UX -дизайне`,
    ],
  },
  {
    name: 'Бенджамин Рейтер',
    subtext: 'Private Fund Manager, Venture Capitalist',
    image: '/images/s-speakers/photo-6.png',
    // eslint-disable-next-line max-len
    text: `Experienced venture capital investor and entrepreneur. He co-founded and served as Principal at Starta Ventures, an early-stage venture capital firm and startup accelerator based in New York City. Currently, Benjamin is the Co-Founder and General Partner at 840 Venture Partners.`,
    items: [
      `Спикер курса по привлечению инвестиций`,
      // eslint-disable-next-line max-len
      `Обладает колоссальным опытом в due diligence технологических компаний, заключении инвестиционных сделок и управлении портфелем.`,
      // eslint-disable-next-line max-len
      `Имеет опыт тесного взаимодействия с более чем 70 стартапами, поддерживая их стратегический рост и помогая масштабировать бизнес`,
    ],
  },
  {
    name: 'Анна Денисенко',
    subtext: 'Founder of marketing agency, US marketing expert',
    image: '/images/s-speakers/no-photo-1.png',
  },
  {
    name: 'Никита Малышев',
    subtext: 'Synergy Global Trade, CFO',
    image: '/images/s-speakers/no-photo-2.png',
  },
  {
    name: 'Анна Урнов',
    subtext: 'Synergy Global Trade, COO',
    image: '/images/s-speakers/no-photo-1.png',
  },
]);
const benefitContent = ref([
  {
    title: 'Интегрированное руководство по бизнесу',
    text: 'Освойте ключевые аспекты запуска и управления бизнесом в США',
    icon: '/images/s-benefits/01.png',
  },
  {
    title: 'Информация по адаптации и жизни в США',
    // eslint-disable-next-line max-len
    text: 'Получите ценные знания о критически важных аспектах жизни в Америке, которые повлияют на ваш бизнес и личную жизнь',
    icon: '/images/s-benefits/02.png',
  },
  {
    title: 'Экспертные знания от местных предпринимателей',
    // eslint-disable-next-line max-len
    text: 'Пройдите курс, разработанный на основе реального опыта американских предпринимателей и экспертов, действующих в различных отраслях бизнеса в США',
    icon: '/images/s-benefits/03.png',
  },
]);

const form1 = ref({
  formTitle: 'Пройдите курс по построению бизнеса в США за $249',
  formTitleDescription: 'Старт обучения 1 июля',
  btnText: 'Купить курс',
  btnColor: 'black',
});

const form2 = ref({
  image: '/images/s-form/1.png',
  title: 'Курс по созданию бизнеса в Америке',
  descriptionTitle: 'Стоимость курса = $249',
  tags: [{ title: 'Старт 1 июля' }, { title: '6 модулей' }, { title: '19 лекций' }, { title: '2 вебинара' }],
  formTitle: 'Присоединяйтесь к нам!',
  btnText: 'Купить курс',
});

const sendForm = async (value) => {
  const responsive = await registration({
    name: value.name,
    phone: value.phone.replace(/[-+()\s]/g, ''),
    email: value.email,
  }).then((res) => {
    console.log(res);
  });
  // console.log(responsive);
  navigateTo('/thanks');
};
</script>

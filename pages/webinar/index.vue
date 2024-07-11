<!-- eslint-disable max-len -->
<template>
  <s-intro-webinar :title="webinarTitle" />
  <s-what />
  <s-premiere :title="contentTitle" :content="contentPremiere[0]" />
  <s-advantages :title="advantagesTitle" :content="cardContent" />
  <div id="form" class="l-default">
    <s-form-classic class="s-form-webinar-1" :content="form1" @action="sendForm" />
  </div>
  <s-about :title="aboutTitle" :info="aboutInfo" :alternative="true" />
  <div class="l-default">
    <s-form class="s-form-webinar-2" :content="form2" @action="sendForm" />
  </div>
</template>

<script setup>
import { landerStore } from '~/plugins/2.lander.client';
import registration from '~/api/registration/webinarRegistration';

const emit = defineEmits(['setMenuItems']);

onMounted(() => {
  landerStore.updateLander({ land: 'business_usa_webinar' });
  emit('setMenuItems', headerMenu.value);
});

const headerMenu = ref([
  {
    text: 'Для кого',
    target: '.s-advantages',
  },
  {
    text: 'Что вы узнаете',
    target: '.s-what',
  },
  {
    text: 'Организатор',
    target: '.s-premiere',
  },
  {
    text: 'Преимущества',
    target: '.s-about',
  },
]);

const contentTitle = ref('Организатор и ведущий вебинара');
const webinarTitle = ref('Открытие бизнеса и&nbsp;адаптация в&nbsp;США: </br> Все, что вам нужно знать');
const contentPremiere = ref([
  {
    contnentTitle: `Рустам Мавланов, <span>Synergy Global Trade,</span> CEO`,
    picture: 'picture',
    pictureMobile: 'picture-mobile',
    list: [
      {
        // eslint-disable-next-line max-len
        text: `Основатель компании, оказавшей услуги <span>250</span> компаниям из <span>22</span> стран мира, планирующим вход на американский рынок или уже работающим в США`,
      },
      {
        // eslint-disable-next-line max-len
        text: `Организатор более <span>30</span> бизнес-мероприятий в США различного уровня (форумы, бизнес-миссии, корпоративные обучения) общей численностью более <span>15 000</span> человек`,
      },
      { text: `Доверенный партнер торгово-промышленной палаты штата Нью-Йорк по импортно-экспортным сервисам` },
      {
        // eslint-disable-next-line max-len
        text: `Спикер более чем <span>100</span> различных бизнес-форумов в <span>12</span> странах мира на тему входа и ведения бизнеса на рынке США общей численностью более <span>150,000</span> человек`,
      },
    ],
  },
]);
const advantagesTitle = ref('Для кого вебинар');
const cardContent = ref([
  {
    title: 'Новые резиденты США',
    subtitle:
      // eslint-disable-next-line max-len
      'Для тех, кто недавно переехал в Америку, планирует создать собственный бизнес максимально правильно и эффективно, а также комфортно адаптироваться в стране',
    icon: '/images/s-advantages/01.png',
  },
  {
    title: 'Постоянные жители США',
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
const aboutTitle = ref('О Synergy Global Trade');
const aboutInfo = ref({
  span_text: `Synergy Global Trade`,
  text_title: 'основана в 2016 году в Нью-Йорке',
  text_subtitle:
    // eslint-disable-next-line max-len
    'И специализируется на сервисах для бизнеса, входящего на рынок США, среди которых исследование рынка, бизнес-планирование, регистрационные действия, получение разрешений на ввоз и торговлю, бухгалтерская, юридическая, продуктовая, маркетинговая и PR-поддержка, поиск поставщиков, а также продвижение товаров и услуг на американском рынке.',
  img: '/images/s-about/about-2.png',
});
const form1 = ref({
  formTitle: 'Примите участие в вебинаре',
  btnText: 'Зарегистрироваться',
  btnColor: 'black',
});
const form2 = ref({
  title: 'Зарегистрируйтесь на вебинар',
  descriptionTitle: 'И получите гайд с тремя перспективными нишами для открытия бизнеса в США',
  formTitle: 'Присоединяйтесь к нам!',
  btnText: 'Купить курс',
});

const sendForm = async (value) => {
  const responsive = await registration({
    name: value.name,
    phone: value.phone,
    email: value.email,
  }).then((res) => {
    console.log(res);
  });
  // console.log(responsive);
  navigateTo('/thanks');
};
</script>

<style lang="scss">
@import './style.scss';
</style>

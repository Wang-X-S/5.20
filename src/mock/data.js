/*global moment*/
const calDiffStr = (oldDate, newDate = Date.now()) => {
  const oldMoment = moment(oldDate);
  const newMoment = moment(newDate);
  const duration = moment.duration(newMoment.diff(oldMoment));
  return Math.floor(duration.as('d')) + '天';
}


const BOY = '🐶';
const DATE_MAP = {
  MEET: new Date('2017-6-8'),
  CONFESSION: new Date('2020-2-28'),
  CONFESSION_YES: new Date('2020-6-28'),
};


export default {
  code: 
`
//大家好,我是单身🐶,13君
// 今天心情不好
// 我给你们表演写代码
// 我要开始写啦
const { ${BOY}} = 🇨🇳;
(${BOY}).开始单身('${moment(DATE_MAP.MEET).format('LL')}');

(${BOY}).到现在('${moment(DATE_MAP.CONFESSION_YES).format('LL')}');

${BOY}.say('WoW，已经单身1058天了！');
....

// MD赶紧开学吧
${BOY}.say('学校还有女生看啊');
${BOY}.say('等等,今天好像是5月20日');
${BOY}.say('历史上今天好像与武大郎有关');

${BOY}.不多说了
${BOY}.祝大家节日快乐,早生猴子鸭~

// 我要开始运行啦`,
  executions: [{
    name:'初始化',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'解压中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'组装中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'打包中',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'微笑🙂',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'大笑😄',
    time: '',
    duration: 0,
    visible: false
  }, {
    name:'编译中...',
    time: '',
    visible: false
  }],
  barrages: [
    '66666666',
    '你的邀请函真是美',
    '人美心更美',
    '你是最棒的',
    '哇哇哇',
    '还差女朋友吗',
    '今晚翻你牌',
    '看朕给你打下的江山',
    '你写代码老快了',
    '你的代码真是棒',
    '😗 😙 😚 😋 ',
    '只要代码写得好，单身永远跑不了'
  ],
}
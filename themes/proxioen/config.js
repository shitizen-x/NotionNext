/**
 * 另一个落地页主题
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: '', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: 'to serve as a bridge between markets and cultures—translating ambitious blueprints into iconic realities', // 英雄区文字
  PROXIO_HERO_TITLE_2: 'We also connect development projects directly with the vast Chinese investment community, providing integrated services across the entire project lifecycle to exponentially amplify your value.', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '查看案例', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL: '#', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '联系我们', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: '#', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 文章区块
  PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '作品',
  PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '我的最新动态',

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',

  PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: true, // 特性区块开关
  PROXIO_FEATURE_TITLE: '为什么选我们',
  PROXIO_FEATURE_TEXT_1: '我们能让您的项目焕发光彩',
  PROXIO_FEATURE_TEXT_2: '丰富的案例经验，专业的技术服务，优质的沟通效率',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '高效工作流程',
  PROXIO_FEATURE_1_TEXT_1:
    '精简的设计流程确保快速交付，在紧迫的工期下仍能保证品质与细节不打折扣。',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '协作式流程',
  PROXIO_FEATURE_2_TEXT_1: '与你紧密合作，融合反馈意见，打造超越预期的设计',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '细节把控',
  PROXIO_FEATURE_3_TEXT_1:
    '精益求精雕琢每个元素，确保成品精致统一，令人过目难忘',

  PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: '#', // 按钮跳转

  // 首页生涯区块
  PROXIO_CAREER_ENABLE: true, // 区块开关
  PROXIO_CAREER_TITLE: '生态',
  PROXIO_CAREER_TEXT: '以下是我们的生态',

  // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
  PROXIO_CAREERS: [
    {
      title: '室内设计公司',
      bio: '梦想的蓝图师',
      text: '这里是灵感成型的起点。我们倾听您的愿景，将其转化为兼具美学灵性与实用功能的空间蓝图，让梦想跃然纸上，清晰可触。'
    },
    {
      title: '建筑模型工作室',
      bio: '未来的预见者',
      text: '在破土动工之前，赋予设计以生命。我们的精密建筑模型将蓝图化为直观的三维实体，让您亲见未来，确保每一个决策都精准无误。'
    },
    {
      title: '装饰工程公司',
      bio: '承诺的守护者',
      text: '我们是理念的卓越执行者。凭借精湛的工艺与严格的流程管理，我们守护着您的梦想、预算与工期，确保每一张设计图纸都被完美复刻为现实。'
    },
    {
      title: '定制家居品牌',
      bio: '个性的雕刻家',
      text: '空间的真正个性，藏于独一无二的细节之中。我们为您量身定制每一件家具与软饰，以画龙点睛之笔，为空间注入专属的性格与温度。'
    }
  ],

  // 首页用户测评区块
  PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
  PROXIO_TESTIMONIALS_TITLE: '管理层',
  PROXIO_TESTIMONIALS_TEXT_1: '我们的团队',
  PROXIO_TESTIMONIALS_TEXT_2:
    '团队简介，团队简介，团队简介，团队简介，团队简介，团队简介，团队简介，团队简介，团队简介，',

  // 用户测评处的跳转按钮
  PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我们',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '名字',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '设计师',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '名字',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '设计师',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '名字',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '业务总监',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '名字',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '营销总监',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '名字',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '全球市场',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT: '人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，人员介绍，',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '名字',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'CEO',
      PROXIO_TESTIMONIALS_ITEM_URL: '#'
    }
  ],

  //   FAQ 常见问题模块
  PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
  PROXIO_FAQ_TITLE: '常见问题0解答',
  PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
  PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
  PROXIO_FAQS: [
    {
      q: '常见问题1',
      a: '常见问题1常见问题1常见问题1常见问题1常见问题1常见问题1'
    },
    {
      q: '常见问题2',
      a: '常见问题2常见问题2常见问题2常见问题2常见问题2常见问题2'
    },
    {
      q: '常见问题3',
      a: '常见问题3常见问题3常见问题3常见问题3常见问题3常见问题3'
    },
    {
      q: '常见问题4',
      a: '常见问题4常见问题4常见问题4常见问题4常见问题4常见问题4'
    }
  ],

  // 关于作者区块
  PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
  PROXIO_ABOUT_TITLE: '关于我们',
  PROXIO_ABOUT_TEXT_1: 'LPRD是一家以"全球整合，本地臻誉"为核心理念的集团公司',
  PROXIO_ABOUT_TEXT_2:
    '在中国波澜壮阔的城市化进程中砥砺前行三十年。如今，我们将这一愿景带至全球，提供跨越项目全生命周期的整合服务。我们的使命是作为市场与文化的桥梁，将宏伟蓝图转化为标志性现实，并为开发项目直接对接庞大的中国投资群体。我们志在超越传统服务商的角色，成为驱动可持续增长的战略合作伙伴，建立历久弥坚的合作关系，共同促进地区繁荣与和谐发展。',
  PROXIO_ABOUT_PHOTO_URL: 'https://img.181024.xyz/file/1764043471271_%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20251125120337.png',
  PROXIO_ABOUT_KEY_1: '经验年限',
  PROXIO_ABOUT_VAL_1: '10年+',
  PROXIO_ABOUT_KEY_2: '客户',
  PROXIO_ABOUT_VAL_2: '1000+',
  PROXIO_ABOUT_KEY_3: '交付项目',
  PROXIO_ABOUT_VAL_3: '5000+',
  PROXIO_ABOUT_KEY_4: '服务范围',
  PROXIO_ABOUT_VAL_4: '全球',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '关于我们',

  // 横向滚动文字
  PROXIO_BRANDS_ENABLE: true, // 滚动文字
  PROXIO_BRANDS: [
    'Rain Design Co',
    'Le Prime Model Co',
    'Decoration Engineering Co',
    'Custom Furnishings Brand'
  ],

  PROXIO_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '其他信息',
      menus: [
        {
          title: '其他信息',
          href: '#'
        },
        {
          title: '其他信息',
          href: '#'
        }
      ]
    },
    {
      name: '其他信息',
      menus: [
        { title: '其他信息', href: '#' },
        {
          title: '其他信息',
          href: '#'
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
  PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  PROXIO_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  PROXIO_CTA_ENABLE: true,
  PROXIO_CTA_TITLE: '与我们建立联系',
  PROXIO_CTA_TITLE_2: '让我们立刻启动您的项目',
  PROXIO_CTA_DESCRIPTION:
    '我们志在超越传统服务商的角色，成为驱动可持续增长的战略合作伙伴，建立历久弥坚的合作关系，共同促进地区繁荣与和谐发展。',
  PROXIO_CTA_BUTTON: true, // 是否显示按钮
  PROXIO_CTA_BUTTON_URL: '/about',
  PROXIO_CTA_BUTTON_TEXT: '联系我们',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: '#', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG

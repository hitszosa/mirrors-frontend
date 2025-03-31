<template>
  <div class="bg-gray-50 text-gray-800 text-center min-h-screen">
    <!-- 语言切换按钮 -->
    <div class="lg:pt-8 pt-4">
      <button
        :class="[
          'lg:px-4 lg:py-2 px-2 py-1 mx-1 rounded border',
          currentLang === 'zh'
            ? 'bg-red-600 text-white border-red-600'
            : 'bg-white border-gray-500',
        ]"
        @click="switchLang('zh')"
      >
        中文
      </button>
      <button
        :class="[
          'lg:px-4 lg:py-2 px-2 py-1 mx-1 rounded border',
          currentLang === 'en'
            ? 'bg-red-600 text-white border-red-600'
            : 'bg-white border-gray-500',
        ]"
        @click="switchLang('en')"
      >
        English
      </button>
    </div>

    <!-- 中文内容 -->
    <div
      v-show="currentLang === 'zh'"
      class="max-w-4xl mx-auto lg:my-10 my-4 lg:p-5 p-4"
    >
      <div class="lg:text-6xl text-4xl my-5">
        😭😢😞
      </div>
      <h1 class="lg:text-9xl text-6xl font-bold text-red-600 my-2 leading-none">
        451
      </h1>
      <h2 class="text-2xl my-5">
        因法律原因不可用
      </h2>

      <div class="bg-white border border-gray-200 rounded-lg p-6 my-8 text-left">
        <h3 class="text-xl font-semibold mb-4">
          关站原因通知：
        </h3>
        <p class="mb-3">
          尊敬的访客：
        </p>
        <p class="mb-3">
          我们很遗憾地通知您，由于一位身处欧盟的学长在使用返校 VPN 访问本站时，本站未弹出 Cookie 使用提示，这违反了
          <a
            href="https://gdpr-info.eu/"
            class="text-blue-600 hover:underline"
            target="_blank"
          >《通用数据保护条例》(GDPR)</a>
          第 7 条关于用户同意的规定。
        </p>
        <p class="mb-3">
          根据 GDPR 第 83 条规定，此类违规行为可能导致高达 2000 万欧元或全球年营业额 4% 的罚款（以较高者为准）。为避免进一步的法律风险，我们决定暂时关闭网站进行全面合规审查。
        </p>
        <p class="mb-3">
          我们的法律团队正在紧急处理此事，预计将在完成以下工作后重新开放：
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-1">
            全面 Cookie 使用审计
          </li>
          <li class="mb-1">
            用户同意管理系统的重新设计
          </li>
          <li class="mb-1">
            欧盟数据保护代表的任命
          </li>
          <li>数据保护影响评估 (DPIA)</li>
        </ul>
        <p class="mb-3">
          我们对由此造成的不便深表歉意，并感谢您的理解与支持。
        </p>
        <p>HITSZ 开源技术协会 敬上</p>
      </div>

      <div class="text-6xl my-5">
        📝⚖️🔒
      </div>

      <p class="text-sm text-gray-500 mt-10">
        相关法律依据：
        <a
          href="https://gdpr-info.eu/art-7-gdpr/"
          class="text-blue-600 hover:underline"
          target="_blank"
        >GDPR 第 7 条</a>
        |
        <a
          href="https://gdpr-info.eu/art-83-gdpr/"
          class="text-blue-600 hover:underline"
          target="_blank"
        >GDPR 第 83
          条</a><br>
        今天是 2025 年 4 月 1 日 - 祝您愚人节快乐！本通知纯属虚构，网站其实运行正常 😉
      </p>
    </div>

    <!-- 英文内容 -->
    <div
      v-show="currentLang === 'en'"
      class="max-w-4xl mx-auto lg:my-10 my-4 lg:p-5 p-4"
    >
      <div class="lg:text-6xl text-4xl my-5">
        😭😢😞
      </div>
      <h1 class="lg:text-9xl text-6xl font-bold text-red-600 my-2 leading-none">
        451
      </h1>
      <h2 class="text-2xl my-5">
        Unavailable For Legal Reasons
      </h2>

      <div class="bg-white border border-gray-200 rounded-lg p-6 my-8 text-left">
        <h3 class="text-xl font-semibold mb-4">
          Shutdown Notice:
        </h3>
        <p class="mb-3">
          Dear Visitor:
        </p>
        <p class="mb-3">
          We regret to inform you that due to a GDPR compliance issue - specifically the failure to display cookie
          consent notification when an EU-based alumnus accessed our site via campus VPN - we are required to
          temporarily suspend service in accordance with
          <a
            href="https://gdpr-info.eu/"
            class="text-blue-600 hover:underline"
            target="_blank"
          >General Data Protection
            Regulation (GDPR)</a>
          Article 7 regarding user consent.
        </p>
        <p class="mb-3">
          Under GDPR Article 83, such violations may result in fines of up to €20 million or 4% of global annual
          turnover (whichever is higher). To mitigate legal risks, we are conducting a full compliance review.
        </p>
        <p class="mb-3">
          Our legal team is working urgently to:
        </p>
        <ul class="list-disc pl-6 mb-4">
          <li class="mb-1">
            Conduct comprehensive cookie audit
          </li>
          <li class="mb-1">
            Redesign consent management system
          </li>
          <li class="mb-1">
            Appoint EU data protection representative
          </li>
          <li>Perform Data Protection Impact Assessment (DPIA)</li>
        </ul>
        <p class="mb-3">
          We apologize for the inconvenience and appreciate your understanding.
        </p>
        <p>Sincerely,<br>HITSZ OSA</p>
      </div>

      <div class="text-6xl my-5">
        📝⚖️🔒
      </div>

      <p class="text-sm text-gray-500 mt-10">
        Legal references:
        <a
          href="https://gdpr-info.eu/art-7-gdpr/"
          class="text-blue-600 hover:underline"
          target="_blank"
        >GDPR Article
          7</a> |
        <a
          href="https://gdpr-info.eu/art-83-gdpr/"
          class="text-blue-600 hover:underline"
          target="_blank"
        >GDPR Article
          83</a><br>
        Today is April 1, 2025 - Happy April Fools' Day! This is a fictional notice 😉
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AprilFools2025',
  data() {
    return {
      currentLang: 'zh',
    }
  },
  mounted() {
    // 设置初始页面标题
    document.title = this.currentLang === 'zh'
      ? '网站已关闭 - GDPR 合规问题'
      : 'Site Disabled - GDPR Compliance'
  },
  methods: {
    switchLang(lang) {
      this.currentLang = lang
      document.title = lang === 'zh'
        ? '网站已关闭 - GDPR 合规问题'
        : 'Site Disabled - GDPR Compliance'
    },
  },
}
</script>

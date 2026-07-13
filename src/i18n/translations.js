// Centralized VI/EN translations.
// Structural data (images, links, tech stacks) stays in components;
// only human-readable copy lives here.

export const translations = {
  vi: {
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      experience: 'Kinh nghiệm',
      skills: 'Kỹ năng',
      certificates: 'Chứng chỉ',
      projects: 'Dự án',
      contact: 'Liên hệ',
    },
    actions: {
      downloadCV: 'Tải CV',
      cvVI: 'CV Tiếng Việt',
      cvEN: 'CV Tiếng Anh',
      themeLight: 'Chế độ sáng',
      themeDark: 'Chế độ tối',
      backToTop: 'Lên đầu trang',
      collapseNav: 'Thu gọn thanh điều hướng',
      expandNav: 'Mở thanh điều hướng',
    },
    hero: {
      role: 'Software Engineer',
      nameFirst: 'Nguyễn Lê Anh ',
      nameHighlight: 'Trúc',
      description:
        'Full-stack Developer chuyên phát triển Mobile & Web App hiện đại, kết hợp sức mạnh của AI để giải quyết các bài toán thực tế hiệu quả.',
      btnProjects: 'XEM DỰ ÁN',
      btnConnect: 'KẾT NỐI',
      btnCV: 'TẢI CV',
      scroll: 'CUỘN',
    },
    about: {
      subheading: 'GIỚI THIỆU',
      titleLine1: 'Nghiên Cứu &',
      titleHighlight: 'Phát Triển',
      badgeYears: 'HCMUNRE',
      badgeText: 'Khóa 11',
      objective:
        'Là sinh viên Kỹ thuật Phần mềm đam mê nơi giao thoa giữa Mobile, Web và AI, tôi luôn tìm cách biến công nghệ phức tạp thành sản phẩm hữu ích cho người dùng thật. Qua các vai trò thực tập về Flutter và Prompt Engineering, tôi học được cách làm việc trong đội ngũ đa chức năng và đưa ý tưởng từ bản vẽ đến khi ra mắt. Mục tiêu của tôi là được phát triển trong một môi trường kỹ thuật tầm cỡ — học hỏi từ những kỹ sư giỏi nhất và tạo ra tác động ở quy mô lớn.',
      infoEducationLabel: 'Học vấn:',
      infoEducationValue: 'Kỹ thuật Phần mềm',
      infoPassionLabel: 'Đam mê:',
      infoPassionValue: 'Web, Mobile & AI',
      infoEmailLabel: 'Email:',
    },
    experience: {
      subheading: 'HÀNH TRÌNH',
      titleLine: 'Kinh',
      titleHighlight: 'Nghiệm',
      currentLabel: 'Hiện tại',
      items: [
        {
          company: 'Athena Studio',
          role: 'Thực tập sinh Prompt Engineer',
          period: '05/2026 – Hiện tại',
          current: true,
          points: [
            {
              label: 'Nghiên cứu & Phát triển AI (R&D)',
              text: 'Tham gia phát triển hệ thống AI Influencer cho dự án nội bộ; đánh giá và thử nghiệm các mô hình Generative AI tiên tiến (Kling, Lyria 3 của Gemini) để nâng cấp quy trình sản xuất video, nâng tỷ lệ ảnh đạt duyệt từ 70% lên 90%.',
            },
            {
              label: 'Vận hành & Tự động hoá',
              text: 'Quản lý và vận hành 8 tài khoản mạng xã hội trên nhiều nền tảng khác nhau; thiết lập các quy trình tự động (warming) và môi trường bảo mật nghiêm ngặt (tích hợp Proxy, xác thực 2FA).',
            },
            {
              label: 'Kiến trúc AI & Đào tạo nội bộ',
              text: 'Nghiên cứu, xây dựng và hoàn thiện hệ thống tài liệu đào tạo chuyên sâu về kiến trúc Multi-Agent và framework LangChain cho đội ngũ phát triển.',
            },
          ],
          tech: ['Generative AI', 'LangChain', 'Multi-Agent', 'Prompt Engineering', 'Automation'],
        },
        {
          company: 'Automation Land',
          role: 'Thực tập sinh Flutter Developer',
          period: '02/2026 – 05/2026',
          current: false,
          points: [
            {
              label: 'Phát triển giao diện (Flutter)',
              text: 'Đảm nhận toàn bộ phần client Flutter của app luyện thi CCMG (2.000+ câu hỏi, 99+ bộ đề bám sát cấu trúc kỳ thi của Bộ Xây dựng).',
            },
            {
              label: 'Tính năng & Trải nghiệm',
              text: 'Hiện thực các màn hình: thống kê tiến độ học tập, chế độ thi thử có bấm giờ, lưu câu hỏi sai để ôn lại và đăng nhập tài khoản; giao diện Material Design responsive.',
            },
            {
              label: 'Tích hợp & Cộng tác',
              text: 'Quản lý state, tổ chức kiến trúc code phía client và tối ưu hiệu năng; tích hợp API từ team backend, phối hợp cùng các nhóm backend và triển khai (deploy) theo quy trình Agile.',
            },
          ],
          tech: ['Flutter', 'Dart', 'Material Design', 'REST API'],
          link: {
            label: 'Google Play',
            url: 'https://play.google.com/store/apps/details?id=com.automation.ccmg.client&hl=vi',
          },
        },
      ],
    },
    skills: {
      subheading: 'CHUYÊN MÔN',
      titleLine: 'Kỹ Năng',
      titleHighlight: 'Công Nghệ',
    },
    certificates: {
      subheading: 'CHỨNG NHẬN',
      titleLine: 'Chứng Chỉ',
      titleHighlight: '& Đào Tạo',
      verify: 'Xác minh',
      groups: {
        'Artificial Intelligence': 'Trí Tuệ Nhân Tạo',
        'Languages & Others': 'Ngoại Ngữ & Khác',
      },
    },
    projects: {
      subheading: 'DANH MỤC SẢN PHẨM',
      titleLine: 'Dự Án',
      titleHighlight: 'Nổi Bật',
      viewDetail: 'XEM CHI TIẾT',
      viewDemo: 'XEM WEB DEMO',
      viewRepo: 'XEM REPOSITORY',
      categories: {
        1: 'AI & Machine Learning',
        2: 'Phát triển Web',
        3: 'Ứng dụng Mobile',
        4: 'Phần mềm Desktop',
        5: 'Thiết kế hệ thống & OOAD',
      },
      descriptions: {
        1: 'Giải bài toán "chọn laptop nào?" giữa hàng trăm lựa chọn: hệ thống hỗ trợ ra quyết định dùng thuật toán AHP kết hợp AI để xếp hạng sản phẩm theo đúng tiêu chí và ngân sách của từng người dùng.',
        2: 'Nền tảng thương mại điện tử cho sản phẩm nghệ thuật (tranh, tượng...), tích hợp chatbot tư vấn giúp khách hàng dễ dàng khám phá và chọn mua tác phẩm phù hợp.',
        3: 'Ứng dụng di động giúp người dùng chủ động quản lý hồ sơ và thông tin sức khoẻ ở một nơi duy nhất, thay cho giấy tờ rời rạc — dễ tra cứu và theo dõi mọi lúc.',
        4: 'Phần mềm desktop quản lý đặt vé xem phim, số hoá và tối ưu quy trình bán vé tại quầy nhằm giảm thao tác thủ công và hạn chế nhầm lẫn.',
        5: 'Hệ thống quản lý đào tạo cho 3 vai trò (Quản trị viên, Giảng viên, Sinh viên), chuẩn hoá quy trình từ mở lớp, ghi danh đến quản lý điểm — thiết kế theo OOAD/UML.',
      },
    },
    contact: {
      subheading: 'LIÊN HỆ',
      titleLine: 'Kết Nối Với',
      titleHighlight: 'Tôi',
      labelEmail: 'Email',
      labelPhone: 'Số điện thoại',
      labelLinkedIn: 'LinkedIn',
      labelGitHub: 'GitHub',
      labelFacebook: 'Facebook',
      footer: '© 2026 Nguyễn Lê Anh Trúc. Xây dựng bằng đam mê & React.',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      certificates: 'Certs',
      projects: 'Projects',
      contact: 'Contact',
    },
    actions: {
      downloadCV: 'Download CV',
      cvVI: 'Vietnamese CV',
      cvEN: 'English CV',
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
      backToTop: 'Back to top',
      collapseNav: 'Collapse navigation',
      expandNav: 'Open navigation',
    },
    hero: {
      role: 'Software Engineer',
      nameFirst: 'Nguyen Le Anh ',
      nameHighlight: 'Truc',
      description:
        'Full-stack Developer focused on building modern Mobile & Web apps, harnessing the power of AI to solve real-world problems effectively.',
      btnProjects: 'VIEW PROJECTS',
      btnConnect: "LET'S CONNECT",
      btnCV: 'DOWNLOAD CV',
      scroll: 'SCROLL',
    },
    about: {
      subheading: 'ABOUT ME',
      titleLine1: 'Research &',
      titleHighlight: 'Development',
      badgeYears: 'HCMUNRE',
      badgeText: 'Class 11',
      objective:
        "I'm a Software Engineering student passionate about the intersection of Mobile, Web and AI, driven to turn complex technology into products that genuinely help people. Through internships in Flutter development and Prompt Engineering, I've learned to collaborate across cross-functional teams and ship ideas from concept to launch. My goal is to grow within a world-class engineering environment — learning from the best and creating impact at scale.",
      infoEducationLabel: 'Education:',
      infoEducationValue: 'Software Engineering',
      infoPassionLabel: 'Passion:',
      infoPassionValue: 'Web, Mobile & AI',
      infoEmailLabel: 'Email:',
    },
    experience: {
      subheading: 'JOURNEY',
      titleLine: 'Work',
      titleHighlight: 'Experience',
      currentLabel: 'Current',
      items: [
        {
          company: 'Athena Studio',
          role: 'Prompt Engineer Intern',
          period: '05/2026 – Present',
          current: true,
          points: [
            {
              label: 'AI Research & Development (R&D)',
              text: 'Contributed to building an AI Influencer system for an internal project; evaluated and experimented with advanced Generative AI models (Kling, Gemini’s Lyria 3) to upgrade the video-production pipeline, raising the approved-image rate from 70% to 90%.',
            },
            {
              label: 'Operations & Automation',
              text: 'Managed and operated 8 social-media accounts across multiple platforms; set up automated warming workflows and a strict security environment (Proxy integration, 2FA).',
            },
            {
              label: 'AI Architecture & Internal Training',
              text: 'Researched and built in-depth training documentation on Multi-Agent architecture and the LangChain framework for the development team.',
            },
          ],
          tech: ['Generative AI', 'LangChain', 'Multi-Agent', 'Prompt Engineering', 'Automation'],
        },
        {
          company: 'Automation Land',
          role: 'Flutter Developer Intern',
          period: '02/2026 – 05/2026',
          current: false,
          points: [
            {
              label: 'Front-end (Flutter)',
              text: 'Owned the entire Flutter client of the CCMG exam-prep app (2,000+ questions, 99+ mock-exam sets matching the Ministry of Construction exam structure).',
            },
            {
              label: 'Features & UX',
              text: 'Implemented the screens: progress tracking, a timed mock-exam mode, a “save wrong answers to review” feature, and account login; responsive Material Design UI.',
            },
            {
              label: 'Integration & Collaboration',
              text: 'Handled state management, client-side architecture and performance; integrated APIs from the backend team and collaborated with the backend and deployment teams in an Agile workflow.',
            },
          ],
          tech: ['Flutter', 'Dart', 'Material Design', 'REST API'],
          link: {
            label: 'Google Play',
            url: 'https://play.google.com/store/apps/details?id=com.automation.ccmg.client&hl=vi',
          },
        },
      ],
    },
    skills: {
      subheading: 'EXPERTISE',
      titleLine: 'Technical',
      titleHighlight: 'Skills',
    },
    certificates: {
      subheading: 'ACCREDITATIONS',
      titleLine: 'Certificates',
      titleHighlight: '& Training',
      verify: 'Verify',
      groups: {
        'Artificial Intelligence': 'Artificial Intelligence',
        'Languages & Others': 'Languages & Others',
      },
    },
    projects: {
      subheading: 'PORTFOLIO',
      titleLine: 'Featured',
      titleHighlight: 'Projects',
      viewDetail: 'VIEW DETAILS',
      viewDemo: 'VIEW WEB DEMO',
      viewRepo: 'VIEW REPOSITORY',
      categories: {
        1: 'AI & Machine Learning',
        2: 'Web Development',
        3: 'Mobile App',
        4: 'Desktop Software',
        5: 'System Design & OOAD',
      },
      descriptions: {
        1: 'Solves the "which laptop should I buy?" problem across hundreds of options: a decision-support system using the AHP algorithm combined with AI to rank products against each user’s own criteria and budget.',
        2: 'An e-commerce platform for artistic products (paintings, sculptures...), with an advisory chatbot that helps customers discover and choose the right pieces.',
        3: 'A mobile app that lets users proactively manage their health records and information in one place instead of scattered paperwork — easy to look up and track anytime.',
        4: 'Desktop software for cinema ticket booking that digitizes and streamlines the on-site sales workflow to reduce manual steps and errors.',
        5: 'A training-management system for 3 roles (Admin, Lecturer, Student), standardizing the flow from opening classes and enrollment to grade management — designed with OOAD/UML.',
      },
    },
    contact: {
      subheading: 'GET IN TOUCH',
      titleLine: 'Connect With',
      titleHighlight: 'Me',
      labelEmail: 'Email',
      labelPhone: 'Phone',
      labelLinkedIn: 'LinkedIn',
      labelGitHub: 'GitHub',
      labelFacebook: 'Facebook',
      footer: '© 2026 Nguyen Le Anh Truc. Built with Passion & React.',
    },
  },
};

export default translations;

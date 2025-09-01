export interface PricingPlan {
  id: string;
  name: string;
  speed: number; // Mbps
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  category: "personal" | "combo" | "business-small" | "business-large";
  equipment?: string;
  tvChannels?: number;
  ipStatic?: boolean;
}

export const personalPlans: PricingPlan[] = [
  {
    id: "home-50",
    name: "HOME 50",
    speed: 50,
    price: 165000,
    features: [
      "Tốc độ 50 Mbps",
      "Modem WiFi 6 miễn phí",
      "Băng thông không giới hạn",
      "Hỗ trợ kỹ thuật 24/7",
    ],
    category: "personal",
    equipment: "Modem WiFi 6",
  },
  {
    id: "home-100",
    name: "HOME 100",
    speed: 100,
    price: 200000,
    features: [
      "Tốc độ 100 Mbps",
      "Modem WiFi 6 miễn phí",
      "Băng thông không giới hạn",
      "Hỗ trợ kỹ thuật 24/7",
      "Tặng 2 Camera giám sát",
    ],
    category: "personal",
    equipment: "Modem WiFi 6 + 2 Camera",
    popular: true,
  },
  {
    id: "home-200",
    name: "HOME 200",
    speed: 200,
    price: 275000,
    features: [
      "Tốc độ 200 Mbps",
      "Modem WiFi 6 miễn phí",
      "Băng thông không giới hạn",
      "Hỗ trợ kỹ thuật 24/7",
      "Tặng 2 Camera giám sát",
      "Box điều khiển giọng nói",
    ],
    category: "personal",
    equipment: "Modem WiFi 6 + 2 Camera + Voice Box",
  },
  {
    id: "home-300",
    name: "HOME 300",
    speed: 300,
    price: 350000,
    features: [
      "Tốc độ 300 Mbps",
      "Modem WiFi 6 miễn phí",
      "Băng thông không giới hạn",
      "Hỗ trợ kỹ thuật 24/7",
      "Tặng 2 Camera giám sát",
      "Box điều khiển giọng nói",
    ],
    category: "personal",
    equipment: "Modem WiFi 6 + 2 Camera + Voice Box",
  },
];

export const comboPlans: PricingPlan[] = [
  {
    id: "combo-100",
    name: "COMBO 100",
    speed: 100,
    price: 320000,
    features: [
      "Internet 100 Mbps",
      "160+ kênh truyền hình",
      "Modem WiFi 6 miễn phí",
      "Smart TV Box hoặc đầu thu",
      "Hỗ trợ kỹ thuật 24/7",
    ],
    category: "combo",
    equipment: "Modem WiFi 6 + TV Box/Đầu thu",
    tvChannels: 160,
    popular: true,
  },
  {
    id: "combo-200",
    name: "COMBO 200",
    speed: 200,
    price: 395000,
    features: [
      "Internet 200 Mbps",
      "160+ kênh truyền hình",
      "Modem WiFi 6 miễn phí",
      "Smart TV Box hoặc đầu thu",
      "Hỗ trợ kỹ thuật 24/7",
    ],
    category: "combo",
    equipment: "Modem WiFi 6 + TV Box/Đầu thu",
    tvChannels: 160,
  },
  {
    id: "combo-300",
    name: "COMBO 300",
    speed: 300,
    price: 470000,
    features: [
      "Internet 300 Mbps",
      "160+ kênh truyền hình",
      "Modem WiFi 6 miễn phí",
      "Smart TV Box hoặc đầu thu",
      "Hỗ trợ kỹ thuật 24/7",
    ],
    category: "combo",
    equipment: "Modem WiFi 6 + TV Box/Đầu thu",
    tvChannels: 160,
  },
];

export const businessSmallPlans: PricingPlan[] = [
  {
    id: "biz-50",
    name: "DOANH NGHIỆP 50",
    speed: 50,
    price: 950000,
    features: [
      "Tốc độ 50 Mbps",
      "Đường truyền riêng biệt",
      "Hỗ trợ kỹ thuật ưu tiên",
      "Modem doanh nghiệp",
      "SLA 99.5%",
    ],
    category: "business-small",
    equipment: "Enterprise Modem",
  },
  {
    id: "biz-100",
    name: "DOANH NGHIỆP 100",
    speed: 100,
    price: 1650000,
    features: [
      "Tốc độ 100 Mbps",
      "Đường truyền riêng biệt",
      "Hỗ trợ kỹ thuật ưu tiên",
      "Modem doanh nghiệp",
      "SLA 99.5%",
    ],
    category: "business-small",
    equipment: "Enterprise Modem",
    popular: true,
  },
  {
    id: "biz-200",
    name: "DOANH NGHIỆP 200",
    speed: 200,
    price: 2750000,
    features: [
      "Tốc độ 200 Mbps",
      "Đường truyền riêng biệt",
      "Hỗ trợ kỹ thuật ưu tiên",
      "Modem doanh nghiệp",
      "SLA 99.5%",
    ],
    category: "business-small",
    equipment: "Enterprise Modem",
  },
];

export const businessLargePlans: PricingPlan[] = [
  {
    id: "enterprise-500",
    name: "ENTERPRISE 500",
    speed: 500,
    price: 8500000,
    features: [
      "Tốc độ 500 Mbps",
      "IP tĩnh chuyên dụng",
      "Đường truyền riêng biệt",
      "Hỗ trợ kỹ thuật 24/7",
      "SLA 99.9%",
      "Bảo mật cao cấp",
    ],
    category: "business-large",
    equipment: "Enterprise Router + Firewall",
    ipStatic: true,
  },
  {
    id: "enterprise-1000",
    name: "ENTERPRISE 1GB",
    speed: 1000,
    price: 15000000,
    features: [
      "Tốc độ 1 Gbps",
      "IP tĩnh chuyên dụng",
      "Đường truyền riêng biệt",
      "Hỗ trợ kỹ thuật 24/7",
      "SLA 99.9%",
      "Bảo mật cao cấp",
      "Load balancing",
    ],
    category: "business-large",
    equipment: "Enterprise Router + Firewall + Load Balancer",
    ipStatic: true,
    popular: true,
  },
  {
    id: "enterprise-2000",
    name: "ENTERPRISE 2GB",
    speed: 2000,
    price: 25000000,
    features: [
      "Tốc độ 2 Gbps",
      "IP tĩnh chuyên dụng",
      "Đường truyền riêng biệt",
      "Hỗ trợ kỹ thuật 24/7",
      "SLA 99.9%",
      "Bảo mật cao cấp",
      "Load balancing",
      "Redundancy backup",
    ],
    category: "business-large",
    equipment: "Enterprise Router + Firewall + Load Balancer + Backup Line",
    ipStatic: true,
  },
];

export const promotions = {
  monthly: {
    title: "Đóng cước hàng tháng",
    benefits: ["Miễn phí Modem WiFi + dây cáp", "Phí hòa mạng: 300.000đ"],
  },
  sixMonths: {
    title: "Trả trước 6 tháng",
    benefits: [
      "Miễn phí Modem WiFi + dây cáp",
      "Phí hòa mạng: 300.000đ",
      "Tặng 1 tháng cước (Doanh nghiệp)",
    ],
  },
  twelveMonths: {
    title: "Trả trước 12 tháng",
    benefits: [
      "Tặng 1 tháng cước (Cá nhân)",
      "Tặng 2 tháng cước (Doanh nghiệp)",
      "Miễn phí Modem WiFi + dây cáp",
      "Phí hòa mạng: 300.000đ",
    ],
  },
};

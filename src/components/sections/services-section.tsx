"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { phoneNumber } from "@/lib/utils";
import {
  Home,
  Building2,
  Tv,
  Camera,
  Phone,
  Wifi,
  Shield,
  Clock,
  Headphones,
  Settings,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Home,
      title: "Internet Gia Đình",
      description:
        "Gói cước Internet cáp quang tốc độ cao dành cho hộ gia đình, phù hợp cho nhu cầu giải trí, làm việc tại nhà.",
      features: [
        "Tốc độ từ 50 - 300 Mbps",
        "Modem WiFi 6 miễn phí",
        "Băng thông không giới hạn",
        "Hỗ trợ kỹ thuật 24/7",
      ],
      price: "Từ 165.000đ/tháng",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Tv,
      title: "Combo Internet + TV",
      description:
        "Gói combo tiết kiệm với Internet tốc độ cao kèm 160+ kênh truyền hình trong và ngoài nước chất lượng HD.",
      features: [
        "Internet từ 100 - 300 Mbps",
        "160+ kênh truyền hình",
        "Smart TV Box hoặc đầu thu",
        "Ứng dụng xem TV trên điện thoại",
      ],
      price: "Từ 320.000đ/tháng",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      popular: true,
    },
    {
      icon: Building2,
      title: "Internet Doanh Nghiệp",
      description:
        "Giải pháp Internet chuyên nghiệp cho doanh nghiệp với đường truyền riêng biệt, IP tĩnh và SLA cao.",
      features: [
        "Tốc độ từ 50 Mbps - 2 Gbps",
        "IP tĩnh chuyên dụng",
        "SLA 99.9% uptime",
        "Hỗ trợ kỹ thuật ưu tiên",
      ],
      price: "Từ 950.000đ/tháng",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
    },
  ];

  const additionalServices = [
    {
      icon: Camera,
      title: "Camera Giám Sát",
      description:
        "Tặng kèm 2 camera xoay 360° với tính năng đàm thoại 2 chiều",
    },
    {
      icon: Wifi,
      title: "Smart TV Box",
      description: "Biến TV thường thành Smart TV, xem YouTube, hát Karaoke",
    },
    {
      icon: Shield,
      title: "Bảo Mật Internet",
      description: "Tường lửa tích hợp bảo vệ khỏi các mối đe dọa mạng",
    },
    {
      icon: Headphones,
      title: "Hỗ Trợ 24/7",
      description: "Đội ngũ kỹ thuật sẵn sàng hỗ trợ mọi lúc mọi nơi",
    },
  ];

  const installationProcess = [
    {
      step: "01",
      title: "Đăng ký & Tư vấn",
      description:
        "Gọi hotline hoặc đăng ký online. Nhân viên tư vấn gói cước phù hợp.",
      icon: Phone,
    },
    {
      step: "02",
      title: "Khảo sát & Lắp đặt",
      description:
        "Kỹ thuật viên đến khảo sát và tiến hành lắp đặt trong 2 giờ.",
      icon: Settings,
    },
    {
      step: "03",
      title: "Kiểm tra & Bàn giao",
      description:
        "Kiểm tra chất lượng, hướng dẫn sử dụng và bàn giao cho khách hàng.",
      icon: CheckCircle,
    },
  ];

  return (
    <section id="services" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 border-viettel-200 text-viettel-600"
          >
            Dịch vụ của chúng tôi
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dịch vụ <span className="text-gradient">Internet Viettel</span> Đà
            Nẵng
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cung cấp đa dạng các gói dịch vụ Internet và truyền hình phù hợp với
            mọi nhu cầu từ cá nhân, gia đình đến doanh nghiệp
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-viettel-500 to-orange-600 text-white px-4 py-1">
                    Phổ biến nhất
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full card-hover border-2 ${
                  service.popular
                    ? "border-viettel-500 shadow-xl"
                    : "border-gray-200"
                } overflow-hidden`}
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-center">
                    {service.description}
                  </p>

                  <div className={`${service.bgColor} rounded-xl p-4`}>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient mb-4">
                      {service.price}
                    </div>
                    <Button
                      variant={service.popular ? "viettel" : "outline"}
                      size="lg"
                      asChild
                      className={`w-full ${
                        service.popular
                          ? "pulse-glow"
                          : "border-viettel-200 text-viettel-600 hover:bg-viettel-50"
                      }`}
                    >
                      <Link href={`tel:${phoneNumber}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Đăng ký ngay
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Dịch vụ <span className="text-gradient">bổ sung</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-viettel-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Installation Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quy trình <span className="text-gradient">lắp đặt</span>
            </h3>
            <p className="text-lg text-gray-600">
              Chỉ 3 bước đơn giản để có Internet tốc độ cao tại nhà
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {installationProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.2 }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-br from-viettel-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-xl font-bold text-white">
                    {step.step}
                  </span>
                </div>

                {/* Connector Line */}
                {index < installationProcess.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-viettel-300 to-orange-300 transform translate-x-8 -z-10"></div>
                )}

                {/* Icon */}
                <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-viettel-600" />
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2 }}
            className="text-center mt-12"
          >
            <Button variant="viettel" size="xl" asChild className="pulse-glow">
              <Link href={`tel:${phoneNumber}`}>
                <Clock className="w-5 h-5 mr-2" />
                Đăng ký lắp đặt trong 2H
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

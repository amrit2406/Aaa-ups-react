// src/components/ProductsPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiFilter,
  FiX,
  FiMessageSquare,
  FiUser,
  FiPhone,
  FiMail,
  FiSend,
} from "react-icons/fi";
import a1 from "../assets/apcoffline2.png";
import a2 from "../assets/apcoffline4.png";
import a3 from "../assets/apcoffline5.png";
import a4 from "../assets/apcoffline6.png";
import a5 from "../assets/apcoffline7.png";
import a6 from "../assets/apcoffline8.png";
import a7 from "../assets/apcoffline9.png";
import a8 from "../assets/apcoffline10.png";
import a9 from "../assets/apcoffline11.png";
import a10 from "../assets/apconline1.png";
import a11 from "../assets/apconline2.png";
import a12 from "../assets/apconline3.png";
import a13 from "../assets/apconline4.png";
import a14 from "../assets/apconline5.png";
import a15 from "../assets/apconline6.png";
import a16 from "../assets/apconline7.png";
import a17 from "../assets/apconline8.png";
import a18 from "../assets/apconline9.png";
import a19 from "../assets/apconline10.png";
import a20 from "../assets/apconline11.png";
import a21 from "../assets/apconline12.png";
import a22 from "../assets/apconline13.png";
import a23 from "../assets/apconline14.png";
import a24 from "../assets/apconline15.png";
import a25 from "../assets/apconline16.png";
import a26 from "../assets/apconline17.png";
import a27 from "../assets/apconline18.png";
import a28 from "../assets/apconline19.png";
import a29 from "../assets/apconline20.png";
import a30 from "../assets/amaze1.png";
import a31 from "../assets/amaze2.png";
import a32 from "../assets/amaze3.png";
import a33 from "../assets/amaze4.png";
import a34 from "../assets/amaze5.png";
import a35 from "../assets/amaze6.png";
import a36 from "../assets/amaze7.png";
import a37 from "../assets/amaze8.png";
import a38 from "../assets/amaze9.png";
import a39 from "../assets/amaze10.png";
import a40 from "../assets/amaze11.png";
import a41 from "../assets/amaze12.png";
import a42 from "../assets/amaze13.png";
import a43 from "../assets/amaze14.png";
import a44 from "../assets/amaze15.png";
import a45 from "../assets/amaze16.png";
import a46 from "../assets/amaze17.png";
import a47 from "../assets/amaze18.png";
import a48 from "../assets/amaze19.png";
import a49 from "../assets/amaze20.png";
import a50 from "../assets/amaze21.png";
import a51 from "../assets/amaze22.png";
import a52 from "../assets/amaze23.png";
import a53 from "../assets/amaze24.png";
import a54 from "../assets/amaze25.png";
import a55 from "../assets/amaze26.png";
// import a56 from "../assets/amaze56.png";

import b1 from "../assets/amazeB1.png";
import b2 from "../assets/amazeB2.png";
import b3 from "../assets/amazeB3.png";
import b4 from "../assets/amazeB4.png";
import b5 from "../assets/amazeB5.png";
import b6 from "../assets/amazeB6.png";
import b7 from "../assets/amazeB7.png";
import b8 from "../assets/amazeB8.png";
import b9 from "../assets/amazeB9.png";
import b10 from "../assets/amazeB10.png";
import b11 from "../assets/amazeB11.png";
import b12 from "../assets/amazeB12.png";
import b13 from "../assets/amazeB13.png";
import b14 from "../assets/amazeB14.png";
import b15 from "../assets/amazeB15.png";
import b16 from "../assets/amazeB16.png";
import b17 from "../assets/amazeB17.png";
import b18 from "../assets/amazeB18.png";
import b19 from "../assets/amazeB19.png";

import c1 from "../assets/amazecom1.png";
import c2 from "../assets/amazecom2.png";
import c3 from "../assets/amazecom3.png";
import c4 from "../assets/amazecom4.png";
import c5 from "../assets/amazecom5.png";
import c6 from "../assets/amazecom6.png";
import c7 from "../assets/amazecom7.png";
import c8 from "../assets/amazecom8.png";
import c9 from "../assets/amazecom9.png";
import c10 from "../assets/amazecom10.png";
import c11 from "../assets/amazecom11.png";
import c12 from "../assets/amazecom12.png";
import c13 from "../assets/amazecom13.png";
import c14 from "../assets/amazecom14.png";
import c15 from "../assets/amazecom15.png";

import ac1 from "../assets/amazeacc1.png";
import ac2 from "../assets/amazeacc2.png";

const products = [
  {
    id: 1,
    name: "APC Back-UPS, BX600I-IN",
    description: "600VA/360W compact tower Back-UPS",
    price: 3990,
    image: a1,
    category: "UPS",
  },
  {
    id: 2,
    name: "APC Back-UPS, BX1100I-IN",
    description: "1100VA/660W compact tower Back-UPS",
    price: 8999,
    image: a2,
    category: "UPS",
  },
  {
    id: 3,
    name: "APC Back-UPS BR1000G-IN",
    description: "BR1000G-IN, 1000VA / 600W, 230V",
    price: 12999,
    image: a3,
    category: "UPS",
  },
  {
    id: 4,
    name: "APC Back-UPS BR1500G-IN",
    description: "BR1500G-IN, 1500VA / 865W, 230V",
    price: 21700,
    image: a4,
    category: "UPS",
  },
  {
    id: 5,
    name: "APC Back-UPS BX1000UXI",
    description: "1000VA, 230V, 12V VDC",
    price: 9900,
    image: a5,
    category: "UPS",
  },
  {
    id: 6,
    name: "APC Back-UPS BX2000UXI",
    description: "2000VA / 1.2Kw Home UPS with 2 battery.",
    price: 16000,
    image: a6,
    category: "UPS",
  },
  {
    id: 7,
    name: "APC Easy UPS BVX1200LI-IN",
    description:
      "1200VA, 230V, AVR Easy UPS provides power protection for unstable power conditions",
    price: 14202,
    image: a7,
    category: "UPS",
  },
  {
    id: 8,
    name: "APC Easy UPS BVX1600LI-IN",
    description: "1600VA, 230V",
    price: 21850,
    image: a8,
    category: "UPS",
  },
  {
    id: 9,
    name: "APC Easy UPS BVX2200LI-IN",
    description: "1600VA, 230V",
    price: 26657,
    image: a9,
    category: "UPS",
  },
  {
    id: 10,
    name: "APC Smart-UPS SRC1KI-IN",
    description: "RC 1000VA, 1 kva / 800Watts Online UPS",
    price: 28990,
    image: a10,
    category: "UPS",
  },
  {
    id: 11,
    name: "APC Smart-UPS SRV1KL-IN",
    description:
      "RC 1000VA, High density, double-conversion on-line power protection with scalable runtime",
    price: 35500,
    image: a11,
    category: "UPS",
  },
  {
    id: 12,
    name: "APC Smart UPS SRC1KUXI",
    description: "1KVA Online, 1KVA Online UPS",
    price: 22990,
    image: a12,
    category: "UPS",
  },
  {
    id: 13,
    name: "APC Easy UPS On-Line, SRV1KUXI-IN",
    description: "1000VA",
    price: 29700,
    image: a13,
    category: "UPS",
  },
  {
    id: 14,
    name: "APC Easy UPS On-Line, SRV2KL-IN",
    description: "SRV2KL-IN",
    price: 29700,
    image: a14,
    category: "UPS",
  },
  {
    id: 15,
    name: "APC Easy UPS On-Line, SRVPM2KRIL-IN",
    description: "2000VA",
    price: 29700,
    image: a15,
    category: "UPS",
  },
  {
    id: 16,
    name: "APC Easy UPS | SRV2KUXI-IN",
    description: "2KVA Online UPS",
    price: 54000,
    image: a16,
    category: "UPS",
  },
  {
    id: 17,
    name: "APC Easy UPS | SRV3KL-IN",
    description: "3KVA Online UPS",
    price: 49990,
    image: a17,
    category: "UPS",
  },
  {
    id: 18,
    name: "APC Easy UPS On-Line, SRVPM3KRIL-IN",
    description:
      "3kVA/2.4kW double-conversion on-line pure sine wave 2U rackmount UPS",
    price: 35500,
    image: a18,
    category: "UPS",
  },
  {
    id: 19,
    name: "APC Easy UPS | SRV3KUXI-IN",
    description:
      "3KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power",
    price: 59990,
    image: a19,
    category: "UPS",
  },
  {
    id: 20,
    name: "APC Easy UPS On-Line, SRV5KL-IN",
    description:
      "5kVA/5kWHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
    price: 59990,
    image: a20,
    category: "UPS",
  },
  {
    id: 21,
    name: "APC Easy UPS | SRV5KRIL-IN",
    description:
      "5KVA Online UPS High quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
    price: 120000,
    image: a21,
    category: "UPS",
  },
  {
    id: a22,
    name: "APC Easy UPS | SRV5KUXI-IN",
    description:
      "5 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
    price: 99000,
    image: a22,
    category: "UPS",
  },
  {
    id: 23,
    name: "APC Easy UPS | SRV6KL-IN",
    description:
      "6 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
    price: 79900,
    image: a23,
    category: "UPS",
  },
  {
    id: 24,
    name: "APC Easy UPS | SRV6KRIL-IN",
    description:
      "6 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
    price: 129900,
    image: a24,
    category: "UPS",
  },
  {
    id: 25,
    name: "APC Easy UPS | SRV6KUXI-IN",
    description:
      "6 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
    price: 99000,
    image: a25,
    category: "UPS",
  },
  {
    id: 26,
    name: "APC Easy UPS | SRV10KUXI-IN",
    description:
      "10 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
    price: 199000,
    image: a26,
    category: "UPS",
  },
  {
    id: 27,
    name: "APC Easy UPS On-Line, SRVPM10KRIL-IN",
    description:
      "10 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
    price: 199000,
    image: a27,
    category: "UPS",
  },
  {
    id: 28,
    name: "APC Easy UPS | SRV15KUXI-IN",
    description:
      "15 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
    price: 299000,
    image: a28,
    category: "UPS",
  },
  {
    id: 29,
    name: "APC Easy UPS | SRV20KUXI-IN",
    description:
      "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
    price: 299000,
    image: a29,
    category: "UPS",
  },
  // {
  //   id: 30,
  //   name: "APC Easy UPS | SRV20KUXI-IN",
  //   description:
  //     "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  //   price: 299000,
  //   image: a30,
  //   category: "UPS",
  // },
  {
    id: 30,
    name: "Amaze AN 4500+",
    description:
      "Capacity – 4000VA / 36V",
    price: 70000,
    image: a30,
    category: "Inverter",
  },
  {
    id: 31,
    name: "AMAZE AN STAR 3875",
    description:
      "Capacity – 3.5kVA /36V",
    price: 34490,
    image: a31,
    category: "Inverter",
  },
  {
    id: 32,
    name: "AMAZE AN STAR 2375",
    description:
      "Capacity – 2kVA /24V",
    price: 19500,
    image: a32,
    category: "Inverter",
  },
  {
    id: 33,
    name: "Amaze AN 1575+",
    description:
      "Capacity – 1400VA",
    price: 10500,
    image: a33,
    category: "Inverter",
  },
  {
    id: 34,
    name: "Amaze AN 1675+",
    description:
      "Capacity – 1500VA",
    price: 10800,
    image: a34,
    category: "Inverter",
  },
  {
    id: 35,
    name: "AQ 1275+",
    description:
      "Capacity – 1100VA / 12V",
    price: 10000,
    image: a35,
    category: "Inverter",
  },
  {
    id: 36,
    name: "AN Digital 1475",
    description:
      "Capacity – 1100VA",
    price: 10000,
    image: a36,
    category: "Inverter",
  },
  {
    id: 37,
    name: "AN 1275 Pro",
    description:
      "Capacity – 1100VA",
    price: 10000,
    image: a37,
    category: "Inverter",
  },
  {
    id: 38,
    name: "AN 1075+",
    description:
      "Capacity – 900VA",
    price: 9200,
    image: a38,
    category: "Inverter",
  },
  {
    id: 39,
    name: "AQ 1075+",
    description:
      "Capacity – 900VA",
    price: 8100,
    image: a39,
    category: "Inverter",
  },
  {
    id: 40,
    name: "AN 875+",
    description:
      "Capacity – 700VA",
    price: 7200,
    image: a40,
    category: "Inverter",
  },
  {
    id: 41,
    name: "AQ 700+",
    description:
      "Capacity – 600VA",
    price: 5600,
    image: a41,
    category: "Inverter",
  },
  {
    id: 42,
    name: "AMAZE AQ 2375+",
    description:
      "Capacity – 2000VA",
    price: 16000,
    image: a42,
    category: "Inverter",
  },
  {
    id: 43,
    name: "Amaze AN 11075+",
    description:
      "Capacity – 10000VA / 180V",
    price: 104990,
    image: a43,
    category: "Inverter",
  },
  {
    id: 44,
    name: "Amaze AN 9075+",
    description:
      "Capacity – 7500VA/120V",
    price: 84990,
    image: a44,
    category: "Inverter",
  },
  {
    id: 45,
    name: "Amaze AN 6075+",
    description:
      "Capacity – 5500VA/72V",
    price: 56990,
    image: a45,
    category: "Inverter",
  },
  {
    id: 46,
    name: "Amaze AN 5075+",
    description:
      "Capacity – 4000VA/48V",
    price: 39990,
    image: a46,
    category: "Inverter",
  },
  {
    id: 47,
    name: "AMAZE AN 3000+",
    description:
      "Capacity – 2800VA / 24V",
    price: 26990,
    image: a47,
    category: "Inverter",
  },
  {
    id: 48,
    name: "Amaze AN STAR 2875",
    description:
      "Capacity – 2500VA",
    price: 25490,
    image: a48,
    category: "Inverter",
  },
  {
    id: 49,
    name: "AN STAR 4575",
    description:
      "Capacity – 400VA/ 48V",
    price: 34990,
    image: a49,
    category: "Inverter",
  },
  {
    id: 50,
    name: "AN STAR 6575",
    description:
      "Capacity – 5500VA/72V",
    price: 55990,
    image: a50,
    category: "Inverter",
  },
  {
    id: 51,
    name: "AMAZE AN STAR 1475",
    description:
      "Capacity – 1100VA / 12V",
    price: 10500,
    image: a51,
    category: "Inverter",
  },
  {
    id: 52,
    name: "AQ Super Charge 1475+",
    description:
      "Capacity – 1100VA",
    price: 9250,
    image: a52,
    category: "Inverter",
  },
  {
    id: 53,
    name: "AQ Super Charge 1175+",
    description:
      "Capacity – 900VA",
    price: 8850,
    image: a53,
    category: "Inverter",
  },
  {
    id: 54,
    name: "Amaze AQ 1675+",
    description:
      "Capacity – 1500VA",
    price: 9600,
    image: a54,
    category: "Inverter",
  },
  {
    id: 55,
    name: "Amaze AQ 900+",
    description:
      "Capacity – 800VA",
    price: 6400,
    image: a55,
    category: "Inverter",
  },
  // {
  //   id: 56,
  //   name: "APC Easy UPS | SRV20KUXI-IN",
  //   description:
  //     "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  //   price: 299000,
  //   image: a56,
  //   category: "UPS",
  // },
  {
  id: 57,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b1,
  category: "Battery",
},
{
  id: 58,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b2,
  category: "UPS",
},
{
  id: 59,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b3,
  category: "UPS",
},
{
  id: 60,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b4,
  category: "UPS",
},
{
  id: 61,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b5,
  category: "UPS",
},
{
  id: 62,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b6,
  category: "UPS",
},
{
  id: 63,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b7,
  category: "UPS",
},
{
  id: 64,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b8,
  category: "UPS",
},
{
  id: 65,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b9,
  category: "UPS",
},
{
  id: 66,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b10,
  category: "UPS",
},
{
  id: 67,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b11,
  category: "UPS",
},
{
  id: 68,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b12,
  category: "UPS",
},
{
  id: 69,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b13,
  category: "UPS",
},
{
  id: 70,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b14,
  category: "UPS",
},
{
  id: 71,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b15,
  category: "UPS",
},
{
  id: 72,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b16,
  category: "UPS",
},
{
  id: 73,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b17,
  category: "UPS",
},
{
  id: 74,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b18,
  category: "UPS",
},
{
  id: 75,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: b19,
  category: "UPS",
},
{
  id: 76,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c1,
  category: "UPS",
},
{
  id: 77,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c2,
  category: "UPS",
},
{
  id: 78,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c3,
  category: "UPS",
},
{
  id: 79,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c4,
  category: "UPS",
},
{
  id: 80,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c5,
  category: "UPS",
},
{
  id: 81,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c6,
  category: "UPS",
},
{
  id: 82,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c7,
  category: "UPS",
},
{
  id: 83,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c8,
  category: "UPS",
},
{
  id: 84,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c9,
  category: "UPS",
},
{
  id: 85,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c10,
  category: "UPS",
},
{
  id: 86,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c11,
  category: "UPS",
},
{
  id: 87,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c12,
  category: "UPS",
},
{
  id: 88,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c13,
  category: "UPS",
},
{
  id: 89,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c14,
  category: "UPS",
},
{
  id: 90,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: c15,
  category: "UPS",
},
{
  id: 91,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: ac1,
  category: "UPS",
},
{
  id: 92,
  name: "APC Easy UPS | SRV20KUXI-IN",
  description:
    "20 KVA Online UPSHigh quality, Double-conversion On-line UPS designed for essential power protection needs even in the most unstable power conditions",
  price: 299000,
  image: ac2,
  category: "UPS",
},


];

const categories = ["All", "UPS", "Inverter", "Battery", "Solar"];

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleEnquiryClick = (product) => {
    setSelectedProduct(product);
    setIsEnquiryOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const message = `*Product Enquiry*\n\n*Product:* ${selectedProduct.name}\n*Price:* ₹${selectedProduct.price}\n\n*Customer Details:*\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n\n*Message:* ${formData.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your WhatsApp number (include country code, e.g., 919876543210)
    const whatsappNumber = "919090299910";

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form and close modal
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setIsEnquiryOpen(false);
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {/* Page Hero/Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/40 to-rose-900/30"></div>

          {/* Animated gradient orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"
            animate={{
              scale: [1.3, 1, 1.3],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Enhanced SVG background with multiple elements */}
          <svg
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 800"
          >
            <defs>
              <linearGradient
                id="gradient-line-hero"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
              </linearGradient>

              {/* Product pattern with tech elements */}
              <pattern
                id="product-pattern"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(0)"
              >
                <rect
                  width="20"
                  height="10"
                  x="15"
                  y="20"
                  fill="none"
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="1"
                />
                <circle
                  cx="25"
                  cy="25"
                  r="5"
                  fill="none"
                  stroke="rgba(255,255,255,0.02)"
                  strokeWidth="1"
                />
                <path
                  d="M15 15L35 35"
                  stroke="rgba(255,255,255,0.02)"
                  strokeWidth="1"
                />
                <path
                  d="M35 15L15 35"
                  stroke="rgba(255,255,255,0.02)"
                  strokeWidth="1"
                />
              </pattern>

              <pattern
                id="grid-pattern"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(30)"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>

            {/* Multiple animated paths for depth */}
            <path
              d="M0 400 Q200 300 400 400 T800 400 Q1000 500 1200 400"
              stroke="url(#gradient-line-hero)"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            >
              <animate
                attributeName="d"
                values="M0 400 Q200 300 400 400 T800 400 Q1000 500 1200 400;M0 400 Q200 500 400 400 T800 400 Q1000 300 1200 400;M0 400 Q200 300 400 400 T800 400 Q1000 500 1200 400"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M0 300 Q400 250 600 350 T1200 300"
              stroke="url(#gradient-line-hero)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
            >
              <animate
                attributeName="d"
                values="M0 300 Q400 250 600 350 T1200 300;M0 300 Q400 350 600 250 T1200 300;M0 300 Q400 250 600 350 T1200 300"
                dur="18s"
                repeatCount="indefinite"
              />
            </path>

            <path
              d="M0 500 Q400 450 600 550 T1200 500"
              stroke="url(#gradient-line-hero)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.3"
            >
              <animate
                attributeName="d"
                values="M0 500 Q400 450 600 550 T1200 500;M0 500 Q400 550 600 450 T1200 500;M0 500 Q400 450 600 550 T1200 500"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>

            {/* Combined patterns for visual interest */}
            <rect
              width="100%"
              height="100%"
              fill="url(#grid-pattern)"
              opacity="0.6"
            />
            <rect
              width="100%"
              height="100%"
              fill="url(#product-pattern)"
              opacity="0.4"
            />

            {/* Floating product icons (battery, zap, settings) */}
            {[
              "M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3 10.5h1.5V15H3v-4.5zM21 10.5h-1.5V15H21v-4.5z",
              "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
              "M10.5 6h9.75a.75.75 0 01.75.75v9.75a.75.75 0 01-.75.75H10.5a.75.75 0 01-.75-.75V6.75a.75.75 0 01.75-.75zM4.5 6H3.75a.75.75 0 00-.75.75v9.75c0 .414.336.75.75.75H4.5a.75.75 0 00.75-.75V6.75A.75.75 0 004.5 6z",
            ].map((d, i) => (
              <path
                key={i}
                d={d}
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
                fill="none"
                transform={`translate(${Math.random() * 1000 + 100}, ${
                  Math.random() * 600 + 100
                }) scale(0.8)`}
              >
                <animate
                  attributeName="opacity"
                  values="0.05;0.15;0.05"
                  dur={`${8 + Math.random() * 7}s`}
                  repeatCount="indefinite"
                />
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  values={`0 ${Math.random() * 1000 + 100} ${
                    Math.random() * 600 + 100
                  }; 5 ${Math.random() * 1000 + 100} ${
                    Math.random() * 600 + 100
                  }; 0 ${Math.random() * 1000 + 100} ${
                    Math.random() * 600 + 100
                  }`}
                  dur={`${15 + Math.random() * 10}s`}
                  repeatCount="indefinite"
                />
              </path>
            ))}

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => {
              const size = Math.random() * 4 + 1;
              return (
                <circle
                  key={i}
                  cx={Math.random() * 1200}
                  cy={Math.random() * 800}
                  r={size}
                  fill="white"
                  opacity="0.05"
                >
                  <animate
                    attributeName="cx"
                    values={`${Math.random() * 1200};${Math.random() * 1200}`}
                    dur={`${15 + Math.random() * 15}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cy"
                    values={`${Math.random() * 800};${Math.random() * 800}`}
                    dur={`${20 + Math.random() * 10}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.05;0.2;0.05"
                    dur={`${5 + Math.random() * 5}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              );
            })}
          </svg>

          {/* Subtle noise texture for premium feel */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MDAnIGhlaWdodD0nNTAwJz4KICA8ZmlsdGVyIGlkPSduYWlzZScgeD0nMCcgeT0nMCc+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9J2ZyYWN0YWxOb2lzZScgYmFzZUZyZXF1ZW5jeT0nMC43JyBudW1PY3RhdmVzPSc0JyBzdGl0Y2hUaWxlcz0nc3RpdGNoJy8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBl9yc2F0dXJhdGUnIHZhbHVlcz0nMCcvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSc1MDAnIGhlaWdodD0nNTAwJyBmaWx0ZXI9J3VybCgjbmlzZSknIG9wYWNpdHk9JzAuMDInLz4KPC9zdmc+')] opacity-10 mix-blend-soft-light"></div>
        </div>

        {/* Corner decorative elements */}
        <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-white/20"></div>
        <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-white/20"></div>
        <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-white/20"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-white/20"></div>

        {/* Animated product line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
          initial={{ top: "0%" }}
          animate={{ top: "100%" }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />

        {/* Pulsing product indicators */}
        {[20, 50, 80].map((position) => (
          <motion.div
            key={position}
            className="absolute w-3 h-3 bg-purple-400 rounded-full"
            style={{
              left: `${position}%`,
              top: "30%",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: position / 50,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-6 text-white">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Premium Products
            </span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-medium"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Explore our curated selection of high-quality power solutions
            designed for excellence.
          </motion.p>

          {/* Animated explore indicator */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="flex justify-center items-center space-x-2 text-blue-300"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Explore our collection</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 sm:px-12 lg:px-24 xl:px-30 py-20 flex flex-col md:flex-row gap-4">
        {/* Filter Sidebar - Desktop */}
        <div className="hidden md:block md:w-1/4">
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6 flex items-center">
                <FiFilter className="mr-2 text-indigo-600" />
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`block w-full text-left px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "bg-gray-50 text-neutral-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Decorative element */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                </div>
                <p className="text-center text-gray-500 text-sm mt-4">
                  Premium power solutions for every need
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Toggle Button - Mobile */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="md:hidden fixed bottom-6 right-6 z-40 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg"
          aria-label="Show filters"
        >
          <FiFilter size={24} />
        </button>

        {/* Filter Modal - Mobile */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              className="fixed inset-0 z-50 bg-white/95 backdrop-blur-sm p-6"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-neutral-800 flex items-center">
                  <FiFilter className="mr-2 text-indigo-600" />
                  Filter Products
                </h3>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  aria-label="Close filters"
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <FiX size={28} className="text-neutral-600" />
                </button>
              </div>
              <div className="space-y-4">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`block w-full text-left px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeCategory === category
                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                        : "bg-gray-50 text-neutral-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="md:w-3/4">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-3xl font-bold text-gray-800">
              {activeCategory === "All"
                ? "All Products"
                : activeCategory + " Products"}
            </h2>
            <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "item" : "items"}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                key={activeCategory}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 group"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      y: -10,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full z-20">
                        {product.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2 h-12 overflow-hidden">
                        {product.description}
                      </p>

                      <div className="flex justify-between items-center mt-2">
                        <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          ₹{product.price}
                        </span>

                        <motion.button
                          onClick={() => handleEnquiryClick(product)}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium flex items-center"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiMessageSquare className="mr-2" />
                          Enquire
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                className="text-center py-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="inline-block p-4 bg-gray-100 rounded-full mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  No Products Found
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Please try selecting another category or check back later for
                  new products.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Enquiry Modal */}
      <AnimatePresence>
        {isEnquiryOpen && selectedProduct && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Product Enquiry</h3>
                    <p className="text-indigo-100">{selectedProduct.name}</p>
                  </div>
                  <button
                    onClick={() => setIsEnquiryOpen(false)}
                    className="p-2 rounded-full hover:bg-indigo-700 transition-colors"
                  >
                    <FiX size={24} />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-2 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-16 h-16 object-contain mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {selectedProduct.name}
                    </h4>
                    <p className="text-indigo-600 font-bold">
                      ₹{selectedProduct.price}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-1">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2 flex items-center">
                        <FiUser className="mr-2 text-indigo-600" />
                        Name <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2 flex items-center">
                        <FiPhone className="mr-2 text-indigo-600" />
                        Phone Number{" "}
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2 flex items-center">
                        <FiMail className="mr-2 text-indigo-600" />
                        Email <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="Your email address"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2 flex items-center">
                        <FiMessageSquare className="mr-2 text-indigo-600" />
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        placeholder="Any specific requirements or questions?"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    <FiSend className="mr-2" />
                    Send Enquiry via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;

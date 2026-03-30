const trips = {
  parents: {
    guestName: "爸爸媽媽和姊姊",
    arrivalDate: "2026-06-11",
    totalDays: 11,
    baseLocation: "Hoboken, NJ",
    days: [
      {
        day: 1,
        title: "抵達・歡迎來到美國！",
        emoji: "✈️",
        activities: [
          {
            time: "下午",
            name: "接機",
            location: "Newark Airport",
            description: "接機後前往Hoboken安頓",
            type: "transport",
          },
          {
            time: "晚上",
            name: "歡迎晚餐",
            location: "Hoboken",
            description: "在家附近吃第一頓美國晚餐",
            type: "food",
          },
        ],
      },
      {
        day: 2,
        title: "曼哈頓初體驗",
        emoji: "🗽",
        activities: [
          {
            time: "上午",
            name: "自由女神像",
            location: "Liberty Island",
            description: "搭渡輪前往自由女神像",
            type: "attraction",
          },
          {
            time: "下午",
            name: "砲台公園",
            location: "Battery Park",
            description: "漫步砲台公園，欣賞曼哈頓天際線",
            type: "nature",
          },
          {
            time: "晚上",
            name: "唐人街晚餐",
            location: "Chinatown, Manhattan",
            description: "在唐人街享用道地亞洲料理",
            type: "food",
          },
        ],
      },
      {
        day: 3,
        title: "中央公園・博物館",
        emoji: "🌿",
        activities: [
          {
            time: "上午",
            name: "中央公園",
            location: "Central Park",
            description: "漫步中央公園，享受紐約綠洲",
            type: "nature",
          },
          {
            time: "下午",
            name: "大都會博物館",
            location: "The Met, Upper East Side",
            description: "參觀世界級博物館",
            type: "museum",
          },
        ],
      },
    ],
  },
};

export default trips;

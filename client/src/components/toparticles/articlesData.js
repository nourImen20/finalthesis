const articlesArray = [
    {
      id: 1,
      type: 'tech',
      title: 'A sad Ramadan for Gaza as Israel continues attacks',
      description:'In the midst of Israel’s war, the people of Gaza don’t feel the joy of the holy month.',
      picap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit... ',
      content: (
        <div>
          Deir el-Balah, Gaza – Ramadan is a holy month for Muslims, with people decorating their homes, buying things for special Ramadan dishes, and planning gatherings with family and friends to break their fast together. But in Deir el-Balah
          <br /><br />
          Another paragraph here...as Israeli bombing continues and the list of civilians being killed gets longer by the day, there is little to indicate that the festivities are on the doorstep Al Jazeera spoke to two sellers in the Deir el-Balah market as they were trying to stir up some Ramadan joy.
        </div>
      ),
      journalist: 'journalist 1',
      pic:require('../../assets/pic1.jpg'),
      picauth:require('../../assets/pic.jpg'),
      date: "12-3-2024"
    },
    {
      id: 2,
      type: 'education',
      title: 'Title 2',
      description:'In the midst of Israel’s war, the people of Gaza don’t feel the joy of the holy month.',
      picap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit... ',
      content: 'Deir el-Balah, Gaza – Ramadan is a holy month for Muslims, with people decorating their homes, buying things for special Ramadan dishes, and planning gatherings with family and friends to break their fast togethe But in Deir el-Balah, as Israeli bombing continues and the list of civilians being killed gets longer by the day, there is little to indicate that the festivities are on the doorstep Al Jazeera spoke to two sellers in the Deir el-Balah market as they were trying to stir up some Ramadan joy.',
      journalist: 'journalist 2',
      pic:require('../../assets/pic1.jpg'),
      picauth:require('../../assets/pic.jpg'),
      date: "12-3-2024"
    },
    {
      id: 3,
      type: 'education',
      title: 'Title 2',
      description:'In the midst of Israel’s war, the people of Gaza don’t feel the joy of the holy month.',
      picap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit... ',
      content: 'Deir el-Balah, Gaza – Ramadan is a holy month for Muslims, with people decorating their homes, buying things for special Ramadan dishes, and planning gatherings with family and friends to break their fast togethe But in Deir el-Balah, as Israeli bombing continues and the list of civilians being killed gets longer by the day, there is little to indicate that the festivities are on the doorstep Al Jazeera spoke to two sellers in the Deir el-Balah market as they were trying to stir up some Ramadan joy.',
      journalist: 'journalist 2',
      pic:require('../../assets/pic1.jpg'),
      picauth:require('../../assets/pic.jpg'),
      date: "10-3-2024"

    },
    {
      id: 4,
      type: 'education',
      title: 'Title 2',
      description:'In the midst of Israel’s war, the people of Gaza don’t feel the joy of the holy month.',
      picap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit... ',
      content: 'Deir el-Balah, Gaza – Ramadan is a holy month for Muslims, with people decorating their homes, buying things for special Ramadan dishes, and planning gatherings with family and friends to break their fast togethe But in Deir el-Balah, as Israeli bombing continues and the list of civilians being killed gets longer by the day, there is little to indicate that the festivities are on the doorstep Al Jazeera spoke to two sellers in the Deir el-Balah market as they were trying to stir up some Ramadan joy.',
      journalist: 'journalist 2',
      pic:require('../../assets/pic1.jpg'),
      picauth:require('../../assets/pic.jpg'),
      date: "12-10-2024"

    },
    {
      id: 5,
      type: 'education',
      title: 'Title 2',
      description:'In the midst of Israel’s war, the people of Gaza don’t feel the joy of the holy month.',
      picap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit... ',
      content: 'Deir el-Balah, Gaza – Ramadan is a holy month for Muslims, with people decorating their homes, buying things for special Ramadan dishes, and planning gatherings with family and friends to break their fast togethe But in Deir el-Balah, as Israeli bombing continues and the list of civilians being killed gets longer by the day, there is little to indicate that the festivities are on the doorstep Al Jazeera spoke to two sellers in the Deir el-Balah market as they were trying to stir up some Ramadan joy.',
      journalist: 'journalist 2',
      pic:require('../../assets/pic1.jpg'),
      picauth:require('../../assets/pic.jpg'),
      date: "12-11-2024"

    },
    {
      id: 6,
      type: 'Article Type 2',
      title: 'Title 2',
      description:'In the midst of Israel’s war, the people of Gaza don’t feel the joy of the holy month.',
      picap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit... ',
      content: 'Deir el-Balah, Gaza – Ramadan is a holy month for Muslims, with people decorating their homes, buying things for special Ramadan dishes, and planning gatherings with family and friends to break their fast togethe But in Deir el-Balah, as Israeli bombing continues and the list of civilians being killed gets longer by the day, there is little to indicate that the festivities are on the doorstep Al Jazeera spoke to two sellers in the Deir el-Balah market as they were trying to stir up some Ramadan joy.',
      journalist: 'journalist 2',
      pic:require('../../assets/pic1.jpg'),
      picauth:require('../../assets/pic.jpg'),
      date:''
    },
    {
      id:7,
      type: 'tech',
      title: 'Title 2',
      description:'In the midst of Israel’s war, the people of Gaza don’t feel the joy of the holy month.',
      picap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit... ',
      content: 'Deir el-Balah, Gaza – Ramadan is a holy month for Muslims, with people decorating their homes, buying things for special Ramadan dishes, and planning gatherings with family and friends to break their fast togethe But in Deir el-Balah, as Israeli bombing continues and the list of civilians being killed gets longer by the day, there is little to indicate that the festivities are on the doorstep Al Jazeera spoke to two sellers in the Deir el-Balah market as they were trying to stir up some Ramadan joy.',
      journalist: 'journalist 2',
      pic:require('../../assets/pic1.jpg'),
      picauth:require('../../assets/pic.jpg'),
      date:''
    },
    {
      id:8,
      type: 'Article Type 2',
      title: 'Title 2',
      description:'In the midst of Israel’s war, the people of Gaza don’t feel the joy of the holy month.',
      picap: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit... ',
      content: 'Deir el-Balah, Gaza – Ramadan is a holy month for Muslims, with people decorating their homes, buying things for special Ramadan dishes, and planning gatherings with family and friends to break their fast togethe But in Deir el-Balah, as Israeli bombing continues and the list of civilians being killed gets longer by the day, there is little to indicate that the festivities are on the doorstep Al Jazeera spoke to two sellers in the Deir el-Balah market as they were trying to stir up some Ramadan joy.',
      journalist: 'journalist 2',
      pic:require('../../assets/pic1.jpg'),
      picauth:require('../../assets/pic.jpg'),
      date:''
    },
    
    // Add more articles as needed
  ];
  
export default articlesArray;
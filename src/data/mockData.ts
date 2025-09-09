import { Player, Server, Faction, War } from '../types';

export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'KROOZZNS',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764573013049445/KROOZZ.png?ex=68c0c1af&is=68bf702f&hm=977b6af608757243c82be037770b478858b95c4ea26a90f535b504117e1f4ab8&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '2',
    name: 'FACADA',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764573294334074/FACADA.png?ex=68c0c1af&is=68bf702f&hm=32cb322330cbb6d2c5bf1c2e0ea923b738acd3209dbd229dfadbc1d19632ae81&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '4',
    name: 'LUANZ7',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764573650845726/luan.png?ex=68c0c1af&is=68bf702f&hm=f1911df65c31a4b46f76cd54bb47dd04f96f91ca3986354762d25484651eaae4&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 2,
      deaths: 0,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '5',
    name: 'VINAOLEK',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764489412313128/VINAO.png?ex=68c0c19b&is=68bf701b&hm=99d844a34a558375237c50c1b7e131c62e8e6a562520b5b4aac646c063f8fee8&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 1,
      deaths: 1,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '6',
    name: 'LELEOZN',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764208263794840/LELEON.png?ex=68c0c158&is=68bf6fd8&hm=6fcb904bd15319cb1d0423c57e55322458ac27d5e8fe7bbb10f9489879156590&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '7',
    name: 'UBLACK',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764413290024991/UBLACK.png?ex=68c0c189&is=68bf7009&hm=95f3c953f0a3c4d290c5ae8fee88c997f432d4ef0946bda797d2fbd12fb7cb4c&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 1,
      deaths: 1,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '8',
    name: 'GORDAONS',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764490398109706/GORDAO.png?ex=68c0c19b&is=68bf701b&hm=6be75d3b6c36a7159baaff8b25075df730f39182eb19177c6213dcb40dde95b0&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '9',
    name: 'OVOTZ',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414762321980559461/OVOTZ.png?ex=68c0bf96&is=68bf6e16&hm=25af4b81ba99a2ea9e775c7cd29bcb35501a8f528da5434bef4052f92d6e12b0&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 2,
      deaths: 0,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '10',
    name: 'MITSUKE',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764490058109020/MITSUKE.png?ex=68c0c19b&is=68bf701b&hm=616815076869b4c2a15a62005728871939a8d9cd3d934470431793b62679105a&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 1,
      deaths: 0,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '11',
    name: 'LENONS',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764208871964802/LENONS.png?ex=68c0c158&is=68bf6fd8&hm=6c4b5b423d0c570862d4eb3c916611db11200f6dfdea7676ec5f48b2bc3afbe5&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '12',
    name: 'PURPOU',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764414367961189/PURPOU.png?ex=68c0c189&is=68bf7009&hm=1bc719b9b39b09623871cd68b5eda7b4b4bf7c3721a7a952e4689bc56432b9c9&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 2,
      deaths: 0,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '13',
    name: 'BISNAGA',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764326186913853/BISNAGA.png?ex=68c0c174&is=68bf6ff4&hm=dbc7156ece4e9983ad536e02ef4e7cab664ac194acd348347bb194f5cfea34a7&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '14',
    name: 'PANIICZ',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764489760309258/PANICZ.png?ex=68c0c19b&is=68bf701b&hm=47d10698fc9e46b03a5d82cdaadd4a8bba63917290f5beb156d2e6e28a86545b&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 1,
    reputation: 5,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 2,
      deaths: 1,
      playtime: '0',
      missions: 1
    }
  },
  {
    id: '15',
    name: 'TSUKII',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764572279312395/TSUKII.png?ex=68c0c1af&is=68bf702f&hm=34adab274971055557e84f4593c38f9442d59cc20f92a87134e4c367003ada96&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '16',
    name: 'BIRO',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764490762752081/BIRO.png?ex=68c0c19b&is=68bf701b&hm=af83d507d0baa5aa62e7cb9f81857f168fdd844b307cbf1097b99d2ec6b3a743&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '17',
    name: 'SHEIK',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764414820810812/SHEIK.png?ex=68c0c189&is=68bf7009&hm=262e635d87dda6a823b0f9eb83e30ee7dfe57bb22f5b137a4cb6dd99a832660b&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '18',
    name: 'NARA',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764325628936213/NARA.png?ex=68c0c174&is=68bf6ff4&hm=eb06728833a0ae7b5ff8e9d26c5da21dc9cf1f8abaf7143d272806d466c3095f&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '19',
    name: 'LUNA',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764325897375815/LUNA.png?ex=68c0c174&is=68bf6ff4&hm=45954cebe410ec232dd5f26fb6e33399e50407455801caa33d5f68a4e8c2239f&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '20',
    name: 'IVYBANKS',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764208570110045/IVY.png?ex=68c0c158&is=68bf6fd8&hm=fbfef7f69ff6fdb82247a025be959e7b39b7c12bef0ee1188fb36dc50648b961&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '21',
    name: 'ALBARA',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414762494689284206/ALBARA.png?ex=68c0bfbf&is=68bf6e3f&hm=1e15b3d9e3851854bacc56b6ece364dbd9d81d4a9e56fee1a0bf6ec9ca1e06bf&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '22',
    name: 'BAIANONS',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764572623110308/BAIANO.png?ex=68c0c1af&is=68bf702f&hm=32013fc8dfe3bd4134ce1c4fcb4ad22d3bb8cbb41cb0eba9cf8ca0f5187bf941&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '23',
    name: 'DEDE',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764412841230437/DEDE.png?ex=68c0c189&is=68bf7009&hm=650c2737ebd4fd6d6065bf161a9527e9470b1cc8076a11d55fa165741b63710e&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '24',
    name: 'GALEGUINS',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764209207640084/GALEGUIN.png?ex=68c0c158&is=68bf6fd8&hm=0473e3417a1f0a9d3df6f3c8ce297cccbd3d80d09d293fcdbcfa2524bd3c1ccd&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '25',
    name: 'DUMAL',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764209488662690/DUMAL.png?ex=68c0c158&is=68bf6fd8&hm=1158388d816554502e497a6af8c8e3eeaaad56b7eb66680335e7601dc55cf869&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '26',
    name: 'RAFINHA',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414764413822697472/RAFINHA.png?ex=68c0c189&is=68bf7009&hm=63bc90e3e97f2921d81751f3b134260760fe15c6597adbc96028e3cbd1ececb7&=&format=webp&quality=lossless',
    faction: 'FRANÇA',
    role: 'PVP',
    level: 2,
    reputation: 7,
    server: 'METROPOLE',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 3,
      deaths: 1,
      playtime: '0',
      missions: 1
    }
  },
    {
    id: '27',
    name: 'TRALHANS',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414812313868828733/TRALHA.png?ex=68c0ee25&is=68bf9ca5&hm=d645dfe65f4ab3ecb5541f10b7160f5a47240a85a6dd41a5feb1e0d7a40b680b&=&format=webp&quality=lossless',
    faction: 'LA7',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
    {
    id: '28',
    name: 'PETER',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414812313541935135/PETER.png?ex=68c0ee25&is=68bf9ca5&hm=e782f15e61e1b29eb806688897261ce7388fc9a6149a2f4c78475f76f4da0c41&=&format=webp&quality=lossless',
    faction: 'LA7',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
    {
    id: '29',
    name: 'PANDORA',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414812313180966982/PANDORA.png?ex=68c0ee25&is=68bf9ca5&hm=c25c4067568af7ffc07759e11ff754a348e094be0420cacb19b56e13a5b38034&=&format=webp&quality=lossless',
    faction: 'F/A',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
    {
    id: '30',
    name: 'ZINA',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414812312568860773/zina.png?ex=68c0ee25&is=68bf9ca5&hm=0377a0ab95c750f0e1221b323f934fa7f5b68b0cf1114701218c4cc6e46de07a&=&format=webp&quality=lossless',
    faction: 'LA7',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  
    {
    id: '32',
    name: 'JOTAEME',
    avatar: 'https://pbs.twimg.com/profile_images/1955112314958422016/cetxHqC5_400x400.jpg',
    faction: 'Rússia',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
    {
    id: '33',
    name: 'MORAIS',
    avatar: 'https://pbs.twimg.com/profile_images/1783633644457721857/JmAAaCAe_400x400.jpg',
    faction: 'Rússia',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
    {
    id: '34',
    name: 'YERK',
    avatar: 'https://pbs.twimg.com/profile_images/1964761927155953664/MhuSnH3v_400x400.jpg',
    faction: 'F/A',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',   
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
    {
    id: '35',
    name: 'PTZNFPS',
    avatar: 'https://pbs.twimg.com/profile_images/1964497830589952000/oejdcYDo_400x400.jpg',
    faction: 'Rússia',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },

    {
    id: '36',
    name: 'ABNT',
    avatar: 'https://pbs.twimg.com/profile_images/1947464582257111041/u7CACK24_400x400.jpg',
    faction: 'Rússia',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
   {
    id: '37',
    name: 'MITO7',
    avatar: 'https://pbs.twimg.com/profile_images/1962931322264932353/yR7fL2fS_400x400.jpg',
    faction: 'Rússia',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '38',
    name: 'HELPZIN',
    avatar: 'https://pbs.twimg.com/profile_images/1962931322264932353/yR7fL2fS_400x400.jpg',
    faction: 'Rússia',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '39',
    name: 'PUGA',
    avatar: 'https://pbs.twimg.com/profile_images/1929224319936176130/IX3cRJPQ_400x400.jpg',
    faction: 'F/A',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '40',
    name: 'NABRIZA',
    avatar: 'https://pbs.twimg.com/profile_images/1959438475280752640/VVWYV_Fw_400x400.jpg',
    faction: 'underground',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '41',
    name: 'GUIZN',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820798736240692/guizn.png?ex=68c0f60c&is=68bfa48c&hm=ad842641c62245d78772559072256377750f6b3c095df5e6d5ed9d365491bf7d&=&format=webp&quality=lossless',
    faction: 'PM',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '42',
    name: 'HL',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820798237114408/hl.png?ex=68c0f60c&is=68bfa48c&hm=b6f8ace99ea421d87bc9cc2df1e7ee30fd6d394f9a263c2230a01e873d67585a&=&format=webp&quality=lossless',
    faction: 'PM',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '43',
    name: 'GORDINN9J',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820797822013490/gordin.png?ex=68c0f60c&is=68bfa48c&hm=01afd5c1b189efe13abe646237b26eecbe2f51703b7ec0d7ce1fb6d461099526&=&format=webp&quality=lossless',
    faction: 'PM',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '44',
    name: 'NANFPS',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820797406515281/NAN.png?ex=68c0f60c&is=68bfa48c&hm=9a4efedb210bf26d689c4e95bba5ecb40ed04a454d6aac3b5964a9e401a697db&=&format=webp&quality=lossless',
    faction: 'PM',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '45',
    name: 'SUZI',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820796764782622/SUZI.png?ex=68c0f60c&is=68bfa48c&hm=912dfe630f59c03a256b8917c68c5ca66b619faba5376a924876032d100f253d&=&format=webp&quality=lossless',
    faction: 'PM',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '46',
    name: 'MARIFPS',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820795758284890/MARIFPS.png?ex=68c0f60b&is=68bfa48b&hm=4efa8159c5a8de35b897f8f0d902896e521ddaf0020313c14d7fa0411e314bef&=&format=webp&quality=lossless',
    faction: 'PM',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '47',
    name: 'MQS',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820795250770073/MQS.png?ex=68c0f60b&is=68bfa48b&hm=be9ecf09daba015aa414545b9294b8883aa80f678036dae96ef31ad2cf244041&=&format=webp&quality=lossless',
    faction: 'LA7',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '48',
    name: 'AUDAZ',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820794839597106/AUDAZ.png?ex=68c0f60b&is=68bfa48b&hm=6f0c2316229d6faaa42a9478f83b80bc093bd9bd3941fa4543fd294dc9fe6a8d&=&format=webp&quality=lossless',
    faction: 'Underground',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '49',
    name: 'CAROLWXZ',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820794508378223/CAROL.png?ex=68c0f60b&is=68bfa48b&hm=01feefaf7a8376c77dbb16744175f2a2ed1d82e786b2c1fa1829fa91058cdb7c&=&format=webp&quality=lossless',
    faction: 'LA7',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '50',
    name: 'TRINDA',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820877832290344/TRINDA.png?ex=68c0f61f&is=68bfa49f&hm=c7261eae3c6cb5267d93b0a0c9f4826d661d1587c1ed19fae7471d027e0ef4c0&=&format=webp&quality=lossless',
    faction: 'PM',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
      id: '51',
      name: 'RAUZIN',
      avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414820794164449410/rauzin.png?ex=68c0f60b&is=68bfa48b&hm=3045c14d4c025767803c6c6cdfc49e934483043869113fffdce66f83911815d0&=&format=webp&quality=lossless',
      faction: 'HOLANDA',
      role: 'PVP',
      level: 0,
      reputation: 0,
      server: 'METROPOLE',
      status: 'online',
      joinDate: '2025-09-08',
      stats: {
        kills: 0,
        deaths: 0,
        playtime: '0',
        missions: 0
      }
    },
  {
    id: '52',
    name: 'RAFFASETE',
    avatar: 'https://pbs.twimg.com/profile_images/1955380911446380545/Dq4L4oyg_400x400.jpg',
    faction: 'underground',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '53',
    name: 'FLOW',
    avatar: 'https://pbs.twimg.com/profile_images/1875702114590105600/t_TrWJ-V_400x400.jpg',
    faction: 'Rússia',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '54',
    name: 'SAMAMBAIA',
    avatar: 'https://pbs.twimg.com/profile_images/1963390804677763074/DgrxmJ3r_400x400.jpg',
    faction: 'underground',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '55',
    name: 'THAY',
    avatar: 'https://media.discordapp.net/attachments/1373720326579556525/1414826232767578194/thay.png?ex=68c0fb1c&is=68bfa99c&hm=2264039d2d7b74547b8b18497ad8650fa68480a0bdff23bcb2560f8621b243f5&=&format=webp&quality=lossless',
    faction: 'underground',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '56',
    name: 'BRIEL',
    avatar: 'https://pbs.twimg.com/profile_images/1718695068410744832/EdtCeGef_400x400.jpg',
    faction: 'Rússia',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '57',
    name: 'SEVEN',
    avatar: 'https://pbs.twimg.com/profile_images/1909404653101412353/9iggzB5G_400x400.jpg',
    faction: 'underground',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '58',
    name: 'DANIKE',
    avatar: 'https://pbs.twimg.com/profile_images/1954019460123127808/qYGVSORs_400x400.jpg',
    faction: 'F/A',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '59',
    name: 'DOLLYN',
    avatar: 'https://pbs.twimg.com/profile_images/1589684684006559744/l-5QHw4S_400x400.jpg',
    faction: 'PM',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '60',
    name: 'CAIIOFX',
    avatar: 'https://pbs.twimg.com/profile_images/1794750138910433281/9EQeRbSE_400x400.jpg',
    faction: 'F/A',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },
  {
    id: '61',
    name: 'CLOUDNS',
    avatar: 'https://pbs.twimg.com/profile_images/1946047845535973379/QCzBoxSv_400x400.jpg',
    faction: 'F/A',
    role: 'PVP',
    level: 0,
    reputation: 0,
    server: '0',
    status: 'online',
    joinDate: '2025-09-08',
    stats: {
      kills: 0,
      deaths: 0,
      playtime: '0',
      missions: 0
    }
  },

];

export const mockServers: Server[] = [
  {
      id: '1',
      name: 'Capital',
      type: 'RP',
      players: 620,
      maxPlayers: 700,
      rating: 5.8,
      description: 'Servidor premium de roleplay com economia realista e facções ativas'
    },
  {
    id: '2',
    name: 'Complexo ',
    type: 'RP',
    players: 480,
    maxPlayers: 1000,
    rating: 5.1,
    description: 'Experiência de roleplay autêntica com sistema de empregos únicos'
  },
  {
    id: '3',
    name: 'GOAT',
    type: 'PVP',
    players: 700,
    maxPlayers: 2000,
    rating: 4.9,
    description: 'Servidor focado em combate intenso e guerra entre facções'
  },
  {
    id: '4',
    name: 'Metropole',
    type: 'RP',
    players: 520,
    maxPlayers: 2000,
    rating: 5.4,
    description: 'Servidor exclusivo com whitelist para roleplay de alta qualidade'
  },
  {
    id: '5',
    name: 'PLF PVP',
    type: 'PVP',
    players: 500,
    maxPlayers: 900,
    rating: 4.5,
    description: 'Combate hardcore com sistema de ranking competitivo'
  }
];
// FRANCA

export const mockFactions: Faction[] = [
  
  {
    id: '1',
    name: 'França',
    tag: '[FR]',
    logo: 'https://media.discordapp.net/attachments/1373720326579556525/1414782121439920158/franca.jpg?ex=68c0d207&is=68bf8087&hm=e364fcafb3e236c5dd64fa44d083b1592e577510ddfc9dd66ea42337259916b3&=&format=webp&width=501&height=890',
    type: 'Gang',
    status: 'active',
    level: 50,
    reputation: 0,
    territory: 'Favela da barragem',
    foundedDate: '2021-07-18',
    leader: 'Connor dygeras scott',
    memberCount: 26,
    maxMembers: 30,
    description: 'Facção francesa, com o melhor elenco de todos',
    achievements: [
      {
        id: '1',
        title: 'Conquistas',
        description: 'Baguncinha 2.0  Baguncinha 3.0',
        icon: '🏆',
        rarity: 'legendary',
        unlockedDate: '2023-01-01'
      },
      {
        id: '2',
        title: 'Força Militar',
        description: 'Venceu várias guerras consecutivas, sem perder nenhuma',
        icon: '⚔️',
        rarity: 'legendary',
        unlockedDate: '2025-09-08'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 0,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },
    members: [
      {
        playerId: '1',
        playerName: 'Connor',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Líder',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '2',
        playerName: 'KroozzNS',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Gerente',
       joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '3',
        playerName: 'GaleguiNS',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Gerente',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '4',
        playerName: 'Luanz7',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Gerente',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '5',
        playerName: 'Tsukii',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Gerente',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      // ---- membros normais ----
      {
        playerId: '6',
        playerName: 'Ovotz',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '7',
        playerName: 'GordaoNS',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '8',
        playerName: 'Locking',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '9',
        playerName: 'Facada',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '10',
        playerName: 'PaNiiCz',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
       joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
      {
        playerId: '11',
        playerName: 'Bisnaga',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Membro',
        joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '12',
    playerName: 'Purpou',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '13',
    playerName: 'LenoNs',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '14',
    playerName: 'Mitsuke',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '15',
    playerName: 'Rafinha',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '16',
    playerName: 'Ublack',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '17',
    playerName: 'Leleozn',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '18',
    playerName: 'Dubem',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '19',
    playerName: 'Luna',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '20',
    playerName: 'Nara',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '21',
    playerName: 'Ivybanks',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '22',
    playerName: 'Albara',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '23',
    playerName: 'Baiano',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '24',
    playerName: 'Dede',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '25',
    playerName: 'Sheik',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '26',
    playerName: 'Biro',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Membro',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  }
]


    
  },// FIM FRANCA
  {
    id: '2',
    name: 'LA7',
    tag: '[LA7]',
    logo: 'https://pbs.twimg.com/profile_images/1953883985701982208/Jf-_y1h0_400x400.jpg',
    type: 'Gang',
    status: 'active',
    level: 50,
    reputation: 0,
    territory: '0',
    foundedDate: '2025-09-08',
    leader: 'BEBETO CANALHA',
    memberCount: 30,
    maxMembers: 30,
    description: '',
    achievements: [
      {
        id: '3',
        title: '0',
        description: '0',
        icon: '👑',
        rarity: 'epic',
        unlockedDate: '2025-08-09'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 1,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },
    members: [
      {
        playerId: '1',
        playerName: 'BEBETO CANALHA',
        avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
        rank: 'Líder',
        joinDate: '2025-09-08',
        status: 'online',
        contributions: { kills: 0, missions: 0, moneyEarned: 0 }
      },
        {
          playerId: '2',
          playerName: 'KOLAROVNS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '3',
          playerName: 'BRASIL',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '4',
          playerName: 'SIDOKANS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '5',
          playerName: 'GUIJHOW',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '6',
          playerName: 'PETER',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'GERENTE DE AÇÃO',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '7',
          playerName: 'ENRICONS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '8',
          playerName: 'PRICE9J',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '9',
          playerName: '2F',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '10',
          playerName: 'GOKURS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '11',
          playerName: 'NITRAM',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '12',
          playerName: 'MAJUSL',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '13',
          playerName: 'RMZIN',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '14',
          playerName: 'BECA',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '15',
          playerName: 'SOIUDOTSM',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '16',
          playerName: 'CAIOTSM',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '17',
          playerName: 'CARIOCA',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'GERENTE',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '18',
          playerName: 'LUCKZINV3',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '19',
          playerName: 'DORIZZI',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '20',
          playerName: 'PVTINNS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '21',
          playerName: 'TRIVELA',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '22',
          playerName: 'ZINA',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '23',
          playerName: 'TRALHANS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '24',
          playerName: 'JANUARIO',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '25',
          playerName: 'KAUE7',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '26',
          playerName: 'SPAWNNS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '27',
          playerName: 'GOLD',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '28',
          playerName: 'SOLONNS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
        {
          playerId: '29',
          playerName: 'OWENNS',
          avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
          rank: 'Membro',
          joinDate: '2025-09-08',
          status: 'online',
          contributions: { kills: 0, missions: 0, moneyEarned: 0 }
        },
      ]
  },
  // fim la7
  // inicio 187
  {
    id: '3',
    name: '187',// COMPLET
    tag: '[187]',
    logo: 'https://pbs.twimg.com/profile_images/1951404435059478528/K0kij3yr_400x400.jpg',
    type: 'Gang',
    status: 'war',
    level: 50,
    reputation: 0,
    territory: '0',
    foundedDate: '2025-09-08',
    leader: '',
    memberCount: 29,
    maxMembers: 30,
    description: '',
    achievements: [
      {
        id: '4',
        title: '0',
        description: '0',
        icon: '💀',
        rarity: 'legendary',
        unlockedDate: '2024-02-10'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 0,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },

    members: [
      {
  playerId: '1',
  playerName: 'jo brazt',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},

{
  playerId: '2',
  playerName: 'kani',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '3',
  playerName: 'von',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '4',
  playerName: 'joaozin7',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '5',
  playerName: 'fxzk',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '6',
  playerName: 'triz ferri',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '7',
  playerName: 'kznn',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '8',
  playerName: 'chefin',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '9',
  playerName: 'nzfps',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '10',
  playerName: 'bahiafpss',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '11',
  playerName: 'capone',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '12',
  playerName: 'eduardowr',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '13',
  playerName: 'thzinmlv',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '14',
  playerName: 'rubi',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '15',
  playerName: 'skn7',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '16',
  playerName: 'reuel',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '17',
  playerName: 'poeira',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '18',
  playerName: 'vilao',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '19',
  playerName: 'jhow',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '20',
  playerName: 'hirossefps',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '21',
  playerName: 'hempa',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '22',
  playerName: 'hash',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '23',
  playerName: 'gordinhofpss',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '24',
  playerName: 'noah',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '25',
  playerName: 'marechal',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '26',
  playerName: 'lemos',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '27',
  playerName: 'doisr',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '28',
  playerName: 'doisg',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '29',
  playerName: 'docinho',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '30',
  playerName: 'destxw',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '31',
  playerName: 'danike',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '32',
  playerName: 'curioso',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
}

    ]
  },
  {
    id: '4',
    name: 'Russia',
    tag: '[RUS]',
    logo: 'https://pbs.twimg.com/profile_images/1728174424908603392/ZQRzPsnz_400x400.jpg',
    type: 'Mafia',
    status: 'active',
    level: 50,
    reputation: 0,
    territory: '0',
    foundedDate: '2025-09-08',
    leader: 'todurooficial',
    memberCount: 19,
    maxMembers: 30,
    description: '0',
    achievements: [
      {
        id: '5',
        title: '0',
        description: '0',
        icon: '💰',
        rarity: 'epic',
        unlockedDate: '2025-09-08'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 0,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },
    
    members: [
  {
    playerId: '1',
    playerName: 'Souza',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '2',
    playerName: 'Morais',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '3',
    playerName: 'Helpzin',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '4',
    playerName: 'Rockstar',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '5',
    playerName: 'Canalha',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '6',
    playerName: 'Jotaeme',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '7',
    playerName: 'Doguin',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '8',
    playerName: 'Abnt',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
    
  },
  {
    playerId: '9',
    playerName: 'Briel',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }

  },
  {
    playerId: '10',
    playerName: 'Veloso',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
    
    
    
  },
  {
    playerId: '11',
    playerName: 'GabrielBest',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '12',
    playerName: 'Mito7',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
   joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '13',
    playerName: 'Luqzz',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '14',
    playerName: 'Skye',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
   joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '15',
    playerName: 'Estrela',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '16',
    playerName: 'Karlinha',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '17',
    playerName: 'Pablin',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
    joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '18',
    playerName: 'Zanzunky',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
   joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  },
  {
    playerId: '19',
    playerName: 'Haridade',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    rank: 'Líder',
   joinDate: '2025-09-08',
    status: 'online',
    contributions: { kills: 0, missions: 0, moneyEarned: 0 }
  }
]

  },
  // fim russia
  // inicio underground
  {
    id: '6',
    name: 'Underground', // COMPLET
    tag: '[UG]',
    logo: 'https://pbs.twimg.com/profile_images/1893088002110341120/aQD2WusN_400x400.jpg',
    type: 'Gang',
    status: 'active',
    level: 50,
    reputation: 0,
    territory: '0',
    foundedDate: '2025-09-08',
    leader: '',
    memberCount: 30,
    maxMembers: 30,
    description: '',
    achievements: [
      {
        id: '7',
        title: '',
        description: '',
        icon: '🕶️',
        rarity: 'rare',
        unlockedDate: '2025-09-08'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 1,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },
    members: [
      {
  playerId: '1',
  playerName: 'AUDAZ',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '2',
  playerName: 'CAIOBA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '3',
  playerName: 'ESCOBAR',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '4',
  playerName: 'THAY',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '5',
  playerName: 'BAIANO',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '6',
  playerName: 'NABRIZA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '7',
  playerName: 'ONE',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '8',
  playerName: 'FER',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '9',
  playerName: 'ADAL',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '10',
  playerName: 'XND',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '11',
  playerName: 'GONZA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '12',
  playerName: 'FLOW',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '13',
  playerName: 'VITIN',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '14',
  playerName: 'SAM',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '15',
  playerName: 'RAVAZ',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '16',
  playerName: 'SILVA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '17',
  playerName: 'PATRICK',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '18',
  playerName: 'DONIZETE',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '19',
  playerName: 'FEBEM',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '20',
  playerName: 'NITTSZ',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '21',
  playerName: 'Maryzlp',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '22',
  playerName: 'HIDAKA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '23',
  playerName: 'KLEITO',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '24',
  playerName: 'PX',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '25',
  playerName: 'RAFFASETE',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '26',
  playerName: 'BRUNIN',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '27',
  playerName: 'GL',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '28',
  playerName: 'SAMAMBAIA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '29',
  playerName: 'SEVEN',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '30',
  playerName: 'PIOZZERA',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},



    ]
  },  // fim underground
  // inicio italia
  {
    id: '9',
    name: 'Italia',// complet
    tag: '[ITA]',
    logo: 'https://pbs.twimg.com/profile_images/1959077725966159872/WMKBcXMv_400x400.jpg',
    type: 'Mafia',
    status: 'active',
    level: 50,
    reputation: 0,
    territory: '0',
    foundedDate: '2025-09-08',
    leader: 'Commander_TAT',
    memberCount: 20,
    maxMembers: 30,
    description: '',
    achievements: [
      {
        id: '8',
        title: '',
        description: '',
        icon: '🎯',
        rarity: 'legendary',
        unlockedDate: '2024-09-08'
      }
    ],
    stats: {
      totalKills: 0,
      totalDeaths: 0,
      territoriesControlled: 1,
      warsWon: 0,
      warsLost: 0,
      totalMoney: 0
    },
    members: [
      {
  playerId: '1',
  playerName: 'katarina',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '2',
  playerName: 'fera',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '3',
  playerName: 'fael',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '4',
  playerName: 'soledtsm',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '5',
  playerName: 'arthurtsm',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '6',
  playerName: 'fptsm',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '7',
  playerName: 'machado',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '8',
  playerName: 'maite',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '9',
  playerName: 'curry',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '10',
  playerName: 'artur',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '11',
  playerName: 'agapito',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '12',
  playerName: 'bento',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '13',
  playerName: 'allen',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '14',
  playerName: 'mottaa',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '15',
  playerName: 'samba',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '16',
  playerName: 'baronesa',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '17',
  playerName: 'ysa',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '18',
  playerName: 'astrid',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '19',
  playerName: 'biel',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '20',
  playerName: 'jzn',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '21',
  playerName: 'hd',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '22',
  playerName: 'vilch',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '23',
  playerName: 'leo',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '24',
  playerName: 'arraxca',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '25',
  playerName: 'lima',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '26',
  playerName: 'vic',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '27',
  playerName: 'zarsao',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '28',
  playerName: 'souza',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '29',
  playerName: 'lfzyn',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'online',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
},
{
  playerId: '30',
  playerName: 'vico',
  avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
  rank: 'Membro',
  joinDate: '2023-01-01',
  status: 'offline',
  contributions: { kills: 0, missions: 0, moneyEarned: 0 }
}

    ]
  },
 
];
// guerras
export const mockWars: War[] = [
  {
    id: '1',
    name: 'Guerra dos Melhores',
    faction1: {
      id: '1',
      name: 'França',
      tag: '[FR]',
      logo: 'https://media.discordapp.net/attachments/1373720326579556525/1415035354607521863/franca.jpg?ex=68c1bdde&is=68c06c5e&hm=e55dd07870c146faa4feb98a883c72e678ab648aa3bca15f9e0f8bff43d265af&=&format=webp&width=486&height=864'
    },
    faction2: {
      id: '4',
      name: 'Russia',
      tag: '[RUS]',
      logo: 'https://media.discordapp.net/attachments/1373720326579556525/1415035354066452491/russia.jpg?ex=68c1bdde&is=68c06c5e&hm=ca4853d85ec514b64253da1c33519f119bddb8232570914f492bfc746431b5e1&=&format=webp&width=1535&height=863'
    },
    status: 'scheduled',
    startDate: '2025-09-11',
    territory: 'Norte',
    timeDate: '21:00',
    reason: 'Disputa de poder',
    description: '🇫🇷 França x Rússia 🇷🇺 A guerra mais esperada dos tempos finalmente chegou! As duas facções mais fortes da metrópole entram em confronto direto, prometendo um embate épico.',

    stats: {
      faction1Kills: 0,
      faction2Kills: 0,
      totalBattles: 0,
      duration: '1 dia'
    },
    escalation: {
      faction1Players: [
      
          {
    playerId: '1',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '2',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '3',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '4',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '5',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '6',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '7',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '8',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '9',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '10',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '11',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '12',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '13',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '14',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '15',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '16',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '17',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '18',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '19',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '20',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '21',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '22',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '23',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '24',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '25',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '26',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '27',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '28',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '29',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '30',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
        

      ],
      faction2Players: [
         {
    playerId: '30',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '31',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '32',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '33',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '34',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '35',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '36',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '37',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '38',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '39',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '40',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '41',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '42',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '43',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '44',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '45',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '46',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '47',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '48',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '49',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '50',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '51',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '52',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '53',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '54',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '55',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '56',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '57',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '58',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
  {
    playerId: '59',
    playerName: '',
    avatar: 'https://i.pinimg.com/236x/21/9e/ae/219eaea67aafa864db091919ce3f5d82.jpg',
    role: 'Leader',
    kills: 0,
    deaths: 0,
    status: 'active'
  },
      ]
    },
    battles: [
      {
        id: '1',
        date: '2024-01-15',
        location: 'Vinewood Sign',
        winner: 'França',
        faction1Kills: 0,
        faction2Kills: 18,
        duration: '45 min',
        description: 'Primeira batalha pela torre de comunicações'
      },
      {
        id: '2',
        date: '2024-01-17',
        location: 'Observatory',
        winner: 'Russia',
        faction1Kills: 19,
        faction2Kills: 25,
        duration: '1h 12min',
        description: 'Contra-ataque russo no observatório'
      }
    ]
  },]
  

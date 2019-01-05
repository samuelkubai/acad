'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'Samson Negedu',
        username: 'Nedson202',
        email: 'samson.negedu@andela.com',
        andela_id: 'JGBB3SKNDKS2SDKJ2',
        team_id: 1,
        profile_picture: 'https://lh4.googleusercontent.com/-MCWylcvnkPE/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-j_Ixh3wWfR7OMIUfmMNzGOfvPA2Q/mo/photo.jpg?sz=50'
      },
      {
        id: 2,
        name: 'Stephen Aribaba',
        username: 'Stylll',
        email: 'stephen.aribaba@andela.com',
        andela_id: 'JGBB3SKNDKS2SDKJ2',
        team_id: 1,
        profile_picture: 'https://lh4.googleusercontent.com/-gL1hNyo--WE/AAAAAAAAAAI/AAAAAAAAABE/CY4uVZFAaaU/photo.jpg?sz=50'
      },
      {
        id: 3,
        name: 'John Mutuma',
        username: 'johnmutuma5',
        email: 'john.mutuma@andela.com',
        andela_id: 'JGBB3SKNDKS2SDKJ2',
        team_id: 1,
        profile_picture: 'https://lh5.googleusercontent.com/-fPdDPL5C1HQ/AAAAAAAAAAI/AAAAAAAAAA0/BQmNtL3fd9c/photo.jpg?sz=50'
      },
      {
        id: 5,
        name: 'Ademola Ariya',
        username: 'd3mola',
        email: 'ademola.ariya@andela.com',
        andela_id: 'JGBB3SKNDKS2SDKJ2',
        team_id: 1,
        profile_picture: 'https://lh5.googleusercontent.com/-zlpT4ktGXoI/AAAAAAAAAAI/AAAAAAAAAAA/AGDgw-jtnFZbXXqBLFlbJCJqKK5-eaQVLw/mo/photo.jpg?sz=50'
      },
      {
        id: 6,
        name: 'Dave Njeru',
        username: 'davenjeru',
        email: 'dave.njeru@andela.com',
        andela_id: 'JGBB3SKNDKS2SDKJ2',
        team_id: 1,
        profile_picture: 'https://lh3.googleusercontent.com/-rMPAg17z4Fk/AAAAAAAAAAI/AAAAAAAAABI/yBuKxOVxk3Y/photo.jpg?sz=50'
      },
      {
        id: 7,
        name: 'Janet Wairimu',
        username: 'janetnim',
        email: 'janet.wairimu@andela.com',
        andela_id: 'LOqMd01ahTAlkavecci',
        team_id: 1,
        profile_picture: 'https://lh4.googleusercontent.com/-y6Mts6_3dJ0/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcYAr6NDfv04D-JIbSipDQxCYICYog/mo/photo.jpg?sz=50'
      },
      {
        id: 8,
        name: 'Rachael Asami',
        username: 'asamisellah',
        email: 'rachael.asami@andela.com',
        andela_id: 'LNJYduIZ_uS6tnMoD4d',
        team_id: 1,
        profile_picture: 'https://lh5.googleusercontent.com/-PzU4-zImXEI/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcZHzDpBwRLf_gsmPNJ5ynV53rvHMQ/mo/photo.jpg?sz=50'
      },
      {
        id: 9,
        name: 'Dennis Wanjiru',
        username: 'DennisWanjiru',
        email: 'dennis.wanjiru@andela.com',
        andela_id: 'LNtGTgV9WpUrlirPCVg',
        team_id: 1,
        profile_picture: 'https://lh5.googleusercontent.com/-V6XNf3iCNvo/AAAAAAAAAAI/AAAAAAAAAAc/8GGsfiPhTlc/photo.jpg?sz=50'
      },
      {
        id: 10,
        name: 'Michael Nthiwa',
        username: 'mikenthiwa',
        email: 'michael.nthiwa@andela.com',
        andela_id: 'LRvI2dK2s3FTiv65w-M',
        team_id: 1,
        profile_picture: 'https://lh4.googleusercontent.com/-ZtUrHG2pIQI/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcaXLLvZvCrF8SU4hNFn9ona5GobCw/mo/photo.jpg?sz=50'
      },
      {
        id: 11,
        name: 'Victor Ugwueze',
        username: 'Victor-Ugwueze',
        email: 'victor.ugwueze@andela.com',
        andela_id: 'LT2f0SNlhfiR54MdpEw',
        team_id: 1,
        profile_picture: 'https://lh5.googleusercontent.com/-fMXOfGe2Kbg/AAAAAAAAAAI/AAAAAAAAAAg/WSHGhev9ZNQ/photo.jpg?sz=50'
      },
      {
        id: 12,
        name: 'Chisom Obuladike',
        username: 'obulaworld',
        email: 'chisom.obuladike@andela.com',
        andela_id: 'LTRWbfwTrikxBHYY7ch',
        team_id: 1,
        profile_picture: 'https://lh3.googleusercontent.com/-VPaFgQjET08/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcaSiBbMxqK-jkO5SunC_Tvsx0i-yw/mo/photo.jpg?sz=50'
      },
      {
        id: 13,
        name: 'Moses Gitau',
        username: 'gitaumoses4',
        email: 'moses.gitau@andela.com',
        andela_id: 'LTI9_PM3tV39gffhUIE',
        team_id: 1,
        profile_picture: 'https://lh6.googleusercontent.com/-hHPqXkzi9LE/AAAAAAAAAAI/AAAAAAAAAAc/nBLhFcMdzkQ/photo.jpg?sz=50'
      },
      {
        id: 14,
        name: 'Moffat Gitau',
        username: 'SrMoffat',
        email: 'moffat.gitau@andela.com',
        andela_id: 'LTMfmwvXO0D9BQ8fXgl',
        team_id: 1,
        profile_picture: 'https://lh3.googleusercontent.com/-GndNwsNM0HI/AAAAAAAAAAI/AAAAAAAAAAc/0kPTNBhCkXU/photo.jpg?sz=50'
      },
      {
        id: 15,
        name: 'William Sserubiri',
        username: 'ssewilliam',
        email: 'william.sserubiri@andela.com',
        andela_id: 'LOYLrl_4orw7UDhj6mo',
        team_id: 1,
        profile_picture: 'https://lh6.googleusercontent.com/-JznmEmIIMek/AAAAAAAAAAI/AAAAAAAAAAc/KBISMb5Pa1E/photo.jpg?sz=50'
      },
      {
        id: 16,
        name: 'Ronald Ndirangu',
        username: 'ronaldndirangu',
        email: 'ronald.ndirangu@andela.com',
        andela_id: 'LOmrkv2HPmwdZvwvec7',
        team_id: 1,
        profile_picture: 'https://lh6.googleusercontent.com/--MWn6ZsbsqY/AAAAAAAAAAI/AAAAAAAAAAw/IDxtzW5nRwM/photo.jpg?sz=50'
      },
      {
        id: 17,
        name: 'Emeka Chinedu',
        username: 'emekafredy',
        email: 'emeka.chinedu@andela.com',
        andela_id: 'LRw07G0hmMA8Li3-gEO',
        team_id: 1,
        profile_picture: 'https://lh3.googleusercontent.com/-gBMYxLL0iEY/AAAAAAAAAAI/AAAAAAAAACw/bwMfUN4B2Bw/photo.jpg?sz=50'
      },
      {
        id: 18,
        name: 'Celestine Ekoh-Ordan',
        username: 'CEOehis',
        email: 'celestine.ekoh-ordan@andela.com',
        andela_id: 'LMIzC-bCc10w7Uqc7-A',
        team_id: 1,
        profile_picture: 'https://lh5.googleusercontent.com/-xk0tlwMiYU8/AAAAAAAAAAI/AAAAAAAAAAc/UsqgiaqPwNE/photo.jpg?sz=50'
      },
      {
        id: 19,
        name: 'Kevin Koech',
        username: 'koechkevin',
        email: 'kevin.koech@andela.com',
        andela_id: 'LTLuRS8MeBH0B3Qg_jC',
        team_id: 1,
        profile_picture: 'https://lh6.googleusercontent.com/-gqegbA4lDbw/AAAAAAAAAAI/AAAAAAAAAAc/_ENwek7Tv4U/photo.jpg?sz=50'
      },
      {
        id: 20,
        name: 'David Muhanguzi',
        username: 'MuhanguziDavid',
        email: 'david.muhanguzi@andela.com',
        andela_id: 'LT7hXxyItvG9otiSo2O',
        team_id: 1,
        profile_picture: 'https://lh4.googleusercontent.com/-69ENY331AQw/AAAAAAAAAAI/AAAAAAAAAAA/AKxrwcbm4kgf2c98C9dOmNliyJmVG-igPw/mo/photo.jpg?sz=50'
      },
      {
        id: 21,
        name: 'Adeniyi Adeyokunnu',
        username: 'Phunmbi',
        email: 'adeniyi.adeyokunnu@andela.com',
        andela_id: 'LT2Pgjb2os_fE5yxSf9',
        team_id: 1,
        profile_picture: 'https://lh3.googleusercontent.com/-RQgXVd3Fn50/AAAAAAAAAAI/AAAAAAAAAAg/hNrC_g7uNCw/photo.jpg?sz=50'
      }
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

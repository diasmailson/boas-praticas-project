import homeSectionOne from '../components/sections/homeSectionOne';
import HomeSectionTwo from '../components/sections/homeSectionTwo';
import floatImage from '../../pages/components/float/floatImage';

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            ${homeSectionOne}
            ${HomeSectionTwo}
            ${floatImage}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;
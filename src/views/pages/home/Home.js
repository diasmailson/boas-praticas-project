import homeSectionOne from '../components/sections/homeSectionOne';
import HomeSectionTwo from '../components/sections/homeSectionTwo';

let Home = {
  is_private: false,

  render: async () => {
      let view = `
          <div>
            <h1>Ínicio</div>
            ${homeSectionOne}
            ${HomeSectionTwo}
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;
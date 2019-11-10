import Filelist from '../assetbundles/gonzo/src/vue/components/Filelist.vue';

export default {
    title: 'Filelist',
};

export const oneLevel = () => ({
  components: { Filelist },
  template: '<filelist label="Test" />',
});

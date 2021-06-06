import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';

import zhHant from 'vuetify/es5/locale/zh-Hant'

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { zhHant },
        current: 'zhHant',
    },
    theme: {
        dark: true,
        default: 'dark',
        themes: {
            dark: {
                primary: colors.teal,
                secondary: colors.cyan,
                accent: colors.amber,
                error: '#E9693D',
                info: '#8DD4E8',
                success: '#198964',
                warning: '#F0E87D',
            },
        },
    },
});


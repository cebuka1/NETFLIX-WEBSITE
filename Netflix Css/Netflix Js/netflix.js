document.addEventListener('DOMContentLoaded', () => {
    const languageData = {
        en: {
            enjoyTvTitle: 'Enjoy on your TV.',
            enjoyTvDesc: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
            watchOfflineTitle: 'Watch everywhere.',
            watchOfflineDesc: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
            watchEverywhereTitle: 'Watch everywhere.',
            watchEverywhereDesc: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'
        },
        es: {
            enjoyTvTitle: 'Disfruta en tu TV.',
            enjoyTvDesc: 'Mira en Smart TVs, Playstation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y más.',
            watchOfflineTitle: 'Mira en todas partes.',
            watchOfflineDesc: 'Transmite películas y programas ilimitados en tu teléfono, tableta, laptop y TV.',
            watchEverywhereTitle: 'Mira en todas partes.',
            watchEverywhereDesc: 'Transmite películas y programas ilimitados en tu teléfono, tableta, laptop y TV.'
        },
        fr: {
            enjoyTvTitle: 'Profitez sur votre TV.',
            enjoyTvDesc: 'Regardez sur Smart TVs, Playstation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray et plus encore.',
            watchOfflineTitle: 'Regardez partout.',
            watchOfflineDesc: 'Diffusez des films et séries illimités sur votre téléphone, tablette, ordinateur portable et TV.',
            watchEverywhereTitle: 'Regardez partout.',
            watchEverywhereDesc: 'Diffusez des films et séries illimités sur votre téléphone, tablette, ordinateur portable et TV.'
        },
        de: {
            enjoyTvTitle: 'Genießen Sie auf Ihrem Fernseher.',
            enjoyTvDesc: 'Schauen Sie auf Smart-TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray-Player und mehr.',
            watchOfflineTitle: 'Überall ansehen.',
            watchOfflineDesc: 'Streamen Sie unbegrenzt Filme und Serien auf Ihrem Telefon, Tablet, Laptop und TV.',
            watchEverywhereTitle: 'Überall ansehen.',
            watchEverywhereDesc: 'Streamen Sie unbegrenzt Filme und Serien auf Ihrem Telefon, Tablet, Laptop und TV.'
        },
        it: {
            enjoyTvTitle: 'Goditi sulla tua TV.',
            enjoyTvDesc: 'Guarda su Smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e altro ancora.',
            watchOfflineTitle: 'Guarda ovunque.',
            watchOfflineDesc: 'Trasmetti film e programmi TV illimitati sul tuo telefono, tablet, laptop e TV.',
            watchEverywhereTitle: 'Guarda ovunque.',
            watchEverywhereDesc: 'Trasmetti film e programmi TV illimitati sul tuo telefono, tablet, laptop e TV.'
        }
    };

    const languageButtons = document.querySelectorAll('.language-btn');

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLanguage = button.textContent.toLowerCase().substring(0, 2);
            const selectedLanguageData = languageData[selectedLanguage];

            if (selectedLanguageData) {
                document.querySelector('.enjoy-tv h1').textContent = selectedLanguageData.enjoyTvTitle;
                document.querySelector('.enjoy-tv p').textContent = selectedLanguageData.enjoyTvDesc;
                document.querySelector('.Watch-offline h1').textContent = selectedLanguageData.watchOfflineTitle;
                document.querySelector('.Watch-offline p').textContent = selectedLanguageData.watchOfflineDesc;
                document.querySelector('.watch-everywhere h1').textContent = selectedLanguageData.watchEverywhereTitle;
                document.querySelector('.watch-everywhere p').textContent = selectedLanguageData.watchEverywhereDesc;
            }
        });
    });
});
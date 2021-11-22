
/////////////////////////////////////////////////////////////////////////

import Notifications from '../pages/html/messaging/messaging-index.f7';

import SettingsPage from '../pages/html/settings/settings-index.f7';

/////////////////////////////////////////////////////////////////////////

import AuthSignInPage from '../pages/html/auth/auth-signin.f7';
import AuthSignUpPage from '../pages/html/auth/auth-signup.f7';
import AuthRecoverPasswordPage from '../pages/html/auth/auth-recover-password.f7';
import AuthLockScreenPage from '../pages/html/auth/auth-lock-screen.f7';

/////////////////////////////////////////////////////////////////////////
/**/
import NicheWalletIndexPage from '../pages/html/niche/wallet/wallet-index.f7';
import NicheDAppsIndexPage from '../pages/html/niche/daaps/daaps-index.f7';
import NicheDeFiIndexPage from '../pages/html/niche/defi/defi-index.f7';
import NicheNFTsIndexPage from '../pages/html/niche/nfts/nfts-index.f7';

/////////////////////////////////////////////////////////////////////////

import HomeScreen from '../pages/html/zimlii.org/home.f7';

import AboutPage from '../pages/html/zimlii.org/about.f7';

import JudgementsPage from '../pages/html/zimlii.org/judgements.f7';
import JudgementsByYearPage from '../pages/html/zimlii.org/judgements-by-year.f7';
import JudgementsByCourtPage from '../pages/html/zimlii.org/judgements-by-court.f7';
import LegislationPage from '../pages/html/zimlii.org/legislation.f7';
import LegislationCoverPage from '../pages/html/zimlii.org/legislation-cover.f7';
import LegislationDetailsPage from '../pages/html/zimlii.org/legislation-details.f7';
import GazettesPage from '../pages/html/zimlii.org/gazettes.f7';
import GazettePage from '../pages/html/zimlii.org/gazette.f7';
import CovidPage from '../pages/html/zimlii.org/covid.f7';
import SearchPage from '../pages/html/zimlii.org/search.f7';
import LibraryPage from '../pages/html/zimlii.org/library.f7';
import HelpPage from '../pages/html/zimlii.org/help.f7';

/////////////////////////////////////////////////////////////////////////

import PanelLeftDefault from '../pages/html/panels/panel-left-default.f7';
import PanelRightDefault from '../pages/html/panels/panel-right-default.f7';

/////////////////////////////////////////////////////////////////////////

import NotFoundPage from '../pages/404.f7';

/////////////////////////////////////////////////////////////////////////

var routes = [
    {
        path: '/',
        component: HomeScreen,
    },
    {
        path: '/home/',
        component: HomeScreen,
    },
    {
        path: '/about/',
        component: AboutPage,
    },
    {
        path: '/notifications/',
        component: Notifications,
    },
    {
        path: '/settings/',
        component: SettingsPage,
    },
    {
        path: '/auth-sign-in/',
        component: AuthSignInPage,
    },
    {
        path: '/auth-sign-up/',
        component: AuthSignUpPage,
    },
    {
        path: '/auth-recover-password/',
        component: AuthRecoverPasswordPage,
    },
    {
        path: '/auth-lock-screen/',
        component: AuthLockScreenPage,
    },
    {
        path: '/wallet-landing/',
        component: NicheWalletIndexPage,
    },
    {
        path: '/dapps-landing/',
        component: NicheDAppsIndexPage,
    },
    {
        path: '/defi-landing/',
        component: NicheDeFiIndexPage,
    },
    {
        path: '/nfts-landing/',
        component: NicheNFTsIndexPage,
    },
    {
        path: '/panel-left-default/',
        component: PanelLeftDefault,
    },
    {
        path: '/panel-right-default/',
        component: PanelRightDefault,
    },

    //////////////////////////////////////////

    {
        path: '/judgements/',
        component: JudgementsPage,
    },
    {
        path: '/judgements-by-year/:year/',
        component: JudgementsByYearPage,
    },
    {
        path: '/judgements-by-court/:court/',
        component: JudgementsByCourtPage,
    },
    {
        path: '/legislation/',
        component: LegislationPage,
    },
    {
        path: '/legislation-cover/:letter/:slug/',
        component: LegislationCoverPage,
    },
    {
        path: '/legislation-details/:letter/:slug/',
        component: LegislationDetailsPage,
    },
    {
        path: '/gazettes/',
        component: GazettesPage,
    },
    {
        path: '/gazette/:year/:gazetteIndex/',
        component: GazettePage,
    },
    {
        path: '/covid/',
        component: CovidPage,
    },
    {
        path: '/search/',
        component: SearchPage,
    },
    {
        path: '/library/',
        component: LibraryPage,
    },
    {
        path: '/help/',
        component: HelpPage,
    },

    //////////////////////////////////////////

    {
        path: '(.*)',
        component: NotFoundPage,
    },


];

export default routes;
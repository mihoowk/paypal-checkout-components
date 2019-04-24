/* @flow */

import { ENV } from '@paypal/sdk-constants/src';
import { LOGO_CLASS } from '@paypal/sdk-logos/src';

import { BUTTON_COLOR, CLASS } from '../../../constants';

export const buttonStyle = `

    .${ CLASS.CONTAINER } {
        display: block;
        white-space: nowrap;
        margin: 0;
        background: 0;
        border: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-transform: none;
        font-weight: 500;R
        font-smoothing: antialiased;
        z-index: 0;
        font-size: 0;
        width: 100%;
        box-sizing: border-box;
    }

    .${ CLASS.BUTTON } {
        border: 1px solid transparent;
        border-radius: 0 3px 3px 0;
        position: relative;
        width: 100%;
        box-sizing: border-box;
        border: none;
        vertical-align: top;
        cursor: pointer;
        overflow: hidden;
    }

    .${ CLASS.BUTTON }.${ CLASS.COLOR }-${ BUTTON_COLOR.TRANSPARENT } {
        cursor: auto;
    }

    .${ CLASS.BUTTON } * {
        cursor: pointer;
    }

    .${ CLASS.CONTAINER }.${ CLASS.ENV }-${ ENV.TEST } .${ CLASS.TEXT } {
        font-family: Arial !important;
        background: rgba(0, 0, 0, 0.5) !important;
        color: transparent  !important;
        text-shadow: none  !important;
    }

    .${ CLASS.CARD } {
        cursor: pointer;
    }

    .${ LOGO_CLASS.LOGO } {
        padding: 0;
        display: inline-block;
        background: none;
        border: none;
        width: auto;
    }

    .${ CLASS.TEXT } {
        display: inline-block;
        white-space: pre-wrap;
    }

    .${ CLASS.BUTTON } > .${ LOGO_CLASS.LOGO },
    .${ CLASS.BUTTON } > .${ LOGO_CLASS.CARD },
    .${ CLASS.BUTTON } > .${ CLASS.TEXT } {
        vertical-align: top;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: left;
    }

    .${ CLASS.TAGLINE } {
        max-width: 100%;
        font-weight: normal;
        display: block;
        text-align: center;
        width: auto;
    }
`;
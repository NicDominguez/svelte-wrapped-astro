import { Components } from '@astrouxds/astro-web-components';
interface RuxNotificationProps {
    /** Set to true to display the Banner and begin countdown to close (if a close-after Number value is provided). */
    open?: Components.RuxNotification["open"];
    /** Message for the notification banner. */
    message?: Components.RuxNotification["message"];
    /** The background color. Possible values include 'standby', 'normal', 'caution', and 'critical'. See [Astro UXDS Status System](https://astrouxds.com/patterns/status-system/). */
    status?: Components.RuxNotification["status"];
    /** If provided, the banner will automatically close after this amount of time. Accepts value either in milliseconds or seconds (which will be converted to milliseconds internally), between `2000` and `10000`, or `2` and `10`, respectively. Any number provided outside of the `2000`-`10000` range will be ignored in favor of the default 2000ms delay. <br>If `closeAfter` is not passed or if it is given an undefined or `null` value, the banner will stay open until the user closes it. */
    closeAfter?: Components.RuxNotification["closeAfter"];
}
interface RuxNotificationEvents {
}
interface RuxNotificationSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxNotification extends SvelteComponent {
    $$prop_def: RuxNotificationProps;
    $$events_def: RuxNotificationEvents;
    $$slot_def: RuxNotificationSlots;
    $on<K extends keyof RuxNotificationEvents>(type: K, callback: (e: RuxNotificationEvents[K]) => any): () => void;
    $set($$props: Partial<RuxNotificationProps>): void;
    constructor(options: any);
    get open(): any;
    set open(open: any);
    get message(): any;
    set message(message: any);
    get status(): any;
    set status(status: any);
    get closeAfter(): any;
    set closeAfter(closeAfter: any);
    get getWebComponent(): HTMLRuxNotificationElement | undefined;
}
export default RuxNotification;

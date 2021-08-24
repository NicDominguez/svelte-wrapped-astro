import { Components } from '@astrouxds/astro-web-components';
interface RuxIconOpenInBrowserProps {
    /** The fill color for the icon */
    color?: Components.RuxIconOpenInBrowser["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconOpenInBrowser["size"];
}
interface RuxIconOpenInBrowserEvents {
}
interface RuxIconOpenInBrowserSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconOpenInBrowser extends SvelteComponent {
    $$prop_def: RuxIconOpenInBrowserProps;
    $$events_def: RuxIconOpenInBrowserEvents;
    $$slot_def: RuxIconOpenInBrowserSlots;
    $on<K extends keyof RuxIconOpenInBrowserEvents>(type: K, callback: (e: RuxIconOpenInBrowserEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconOpenInBrowserProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconOpenInBrowserElement | undefined;
}
export default RuxIconOpenInBrowser;

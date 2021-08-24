import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAlternateEmailProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAlternateEmail["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAlternateEmail["size"];
}
interface RuxIconAlternateEmailEvents {
}
interface RuxIconAlternateEmailSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAlternateEmail extends SvelteComponent {
    $$prop_def: RuxIconAlternateEmailProps;
    $$events_def: RuxIconAlternateEmailEvents;
    $$slot_def: RuxIconAlternateEmailSlots;
    $on<K extends keyof RuxIconAlternateEmailEvents>(type: K, callback: (e: RuxIconAlternateEmailEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAlternateEmailProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAlternateEmailElement | undefined;
}
export default RuxIconAlternateEmail;

import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEmailProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEmail["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEmail["size"];
}
interface RuxIconEmailEvents {
}
interface RuxIconEmailSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEmail extends SvelteComponent {
    $$prop_def: RuxIconEmailProps;
    $$events_def: RuxIconEmailEvents;
    $$slot_def: RuxIconEmailSlots;
    $on<K extends keyof RuxIconEmailEvents>(type: K, callback: (e: RuxIconEmailEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEmailProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEmailElement | undefined;
}
export default RuxIconEmail;

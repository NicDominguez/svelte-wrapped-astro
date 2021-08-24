import { Components } from '@astrouxds/astro-web-components';
interface RuxIconHttpProps {
    /** The fill color for the icon */
    color?: Components.RuxIconHttp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconHttp["size"];
}
interface RuxIconHttpEvents {
}
interface RuxIconHttpSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconHttp extends SvelteComponent {
    $$prop_def: RuxIconHttpProps;
    $$events_def: RuxIconHttpEvents;
    $$slot_def: RuxIconHttpSlots;
    $on<K extends keyof RuxIconHttpEvents>(type: K, callback: (e: RuxIconHttpEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconHttpProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconHttpElement | undefined;
}
export default RuxIconHttp;

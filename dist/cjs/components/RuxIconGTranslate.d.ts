import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGTranslateProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGTranslate["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGTranslate["size"];
}
interface RuxIconGTranslateEvents {
}
interface RuxIconGTranslateSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGTranslate extends SvelteComponent {
    $$prop_def: RuxIconGTranslateProps;
    $$events_def: RuxIconGTranslateEvents;
    $$slot_def: RuxIconGTranslateSlots;
    $on<K extends keyof RuxIconGTranslateEvents>(type: K, callback: (e: RuxIconGTranslateEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGTranslateProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGTranslateElement | undefined;
}
export default RuxIconGTranslate;

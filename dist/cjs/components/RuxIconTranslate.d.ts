import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTranslateProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTranslate["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTranslate["size"];
}
interface RuxIconTranslateEvents {
}
interface RuxIconTranslateSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTranslate extends SvelteComponent {
    $$prop_def: RuxIconTranslateProps;
    $$events_def: RuxIconTranslateEvents;
    $$slot_def: RuxIconTranslateSlots;
    $on<K extends keyof RuxIconTranslateEvents>(type: K, callback: (e: RuxIconTranslateEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTranslateProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTranslateElement | undefined;
}
export default RuxIconTranslate;

import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPauseProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPause["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPause["size"];
}
interface RuxIconPauseEvents {
}
interface RuxIconPauseSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPause extends SvelteComponent {
    $$prop_def: RuxIconPauseProps;
    $$events_def: RuxIconPauseEvents;
    $$slot_def: RuxIconPauseSlots;
    $on<K extends keyof RuxIconPauseEvents>(type: K, callback: (e: RuxIconPauseEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPauseProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPauseElement | undefined;
}
export default RuxIconPause;

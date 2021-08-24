import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAvTimerProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAvTimer["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAvTimer["size"];
}
interface RuxIconAvTimerEvents {
}
interface RuxIconAvTimerSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAvTimer extends SvelteComponent {
    $$prop_def: RuxIconAvTimerProps;
    $$events_def: RuxIconAvTimerEvents;
    $$slot_def: RuxIconAvTimerSlots;
    $on<K extends keyof RuxIconAvTimerEvents>(type: K, callback: (e: RuxIconAvTimerEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAvTimerProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAvTimerElement | undefined;
}
export default RuxIconAvTimer;

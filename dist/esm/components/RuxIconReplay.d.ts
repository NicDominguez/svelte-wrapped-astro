import { Components } from '@astrouxds/astro-web-components';
interface RuxIconReplayProps {
    /** The fill color for the icon */
    color?: Components.RuxIconReplay["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconReplay["size"];
}
interface RuxIconReplayEvents {
}
interface RuxIconReplaySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconReplay extends SvelteComponent {
    $$prop_def: RuxIconReplayProps;
    $$events_def: RuxIconReplayEvents;
    $$slot_def: RuxIconReplaySlots;
    $on<K extends keyof RuxIconReplayEvents>(type: K, callback: (e: RuxIconReplayEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconReplayProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconReplayElement | undefined;
}
export default RuxIconReplay;

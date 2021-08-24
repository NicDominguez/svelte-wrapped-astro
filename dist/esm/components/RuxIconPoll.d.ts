import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPollProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPoll["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPoll["size"];
}
interface RuxIconPollEvents {
}
interface RuxIconPollSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPoll extends SvelteComponent {
    $$prop_def: RuxIconPollProps;
    $$events_def: RuxIconPollEvents;
    $$slot_def: RuxIconPollSlots;
    $on<K extends keyof RuxIconPollEvents>(type: K, callback: (e: RuxIconPollEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPollProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPollElement | undefined;
}
export default RuxIconPoll;

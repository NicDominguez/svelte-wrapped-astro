import { Components } from '@astrouxds/astro-web-components';
interface RuxIconInsertEmoticonProps {
    /** The fill color for the icon */
    color?: Components.RuxIconInsertEmoticon["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconInsertEmoticon["size"];
}
interface RuxIconInsertEmoticonEvents {
}
interface RuxIconInsertEmoticonSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconInsertEmoticon extends SvelteComponent {
    $$prop_def: RuxIconInsertEmoticonProps;
    $$events_def: RuxIconInsertEmoticonEvents;
    $$slot_def: RuxIconInsertEmoticonSlots;
    $on<K extends keyof RuxIconInsertEmoticonEvents>(type: K, callback: (e: RuxIconInsertEmoticonEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconInsertEmoticonProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconInsertEmoticonElement | undefined;
}
export default RuxIconInsertEmoticon;

import { Components } from '@astrouxds/astro-web-components';
interface RuxIconTrackChangesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconTrackChanges["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconTrackChanges["size"];
}
interface RuxIconTrackChangesEvents {
}
interface RuxIconTrackChangesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconTrackChanges extends SvelteComponent {
    $$prop_def: RuxIconTrackChangesProps;
    $$events_def: RuxIconTrackChangesEvents;
    $$slot_def: RuxIconTrackChangesSlots;
    $on<K extends keyof RuxIconTrackChangesEvents>(type: K, callback: (e: RuxIconTrackChangesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconTrackChangesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconTrackChangesElement | undefined;
}
export default RuxIconTrackChanges;

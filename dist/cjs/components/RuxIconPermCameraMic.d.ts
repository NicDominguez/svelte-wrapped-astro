import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPermCameraMicProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPermCameraMic["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPermCameraMic["size"];
}
interface RuxIconPermCameraMicEvents {
}
interface RuxIconPermCameraMicSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPermCameraMic extends SvelteComponent {
    $$prop_def: RuxIconPermCameraMicProps;
    $$events_def: RuxIconPermCameraMicEvents;
    $$slot_def: RuxIconPermCameraMicSlots;
    $on<K extends keyof RuxIconPermCameraMicEvents>(type: K, callback: (e: RuxIconPermCameraMicEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPermCameraMicProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPermCameraMicElement | undefined;
}
export default RuxIconPermCameraMic;

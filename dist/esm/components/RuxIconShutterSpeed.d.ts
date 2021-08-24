import { Components } from '@astrouxds/astro-web-components';
interface RuxIconShutterSpeedProps {
    /** The fill color for the icon */
    color?: Components.RuxIconShutterSpeed["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconShutterSpeed["size"];
}
interface RuxIconShutterSpeedEvents {
}
interface RuxIconShutterSpeedSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconShutterSpeed extends SvelteComponent {
    $$prop_def: RuxIconShutterSpeedProps;
    $$events_def: RuxIconShutterSpeedEvents;
    $$slot_def: RuxIconShutterSpeedSlots;
    $on<K extends keyof RuxIconShutterSpeedEvents>(type: K, callback: (e: RuxIconShutterSpeedEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconShutterSpeedProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconShutterSpeedElement | undefined;
}
export default RuxIconShutterSpeed;

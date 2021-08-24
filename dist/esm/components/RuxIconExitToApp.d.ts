import { Components } from '@astrouxds/astro-web-components';
interface RuxIconExitToAppProps {
    /** The fill color for the icon */
    color?: Components.RuxIconExitToApp["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconExitToApp["size"];
}
interface RuxIconExitToAppEvents {
}
interface RuxIconExitToAppSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconExitToApp extends SvelteComponent {
    $$prop_def: RuxIconExitToAppProps;
    $$events_def: RuxIconExitToAppEvents;
    $$slot_def: RuxIconExitToAppSlots;
    $on<K extends keyof RuxIconExitToAppEvents>(type: K, callback: (e: RuxIconExitToAppEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconExitToAppProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconExitToAppElement | undefined;
}
export default RuxIconExitToApp;

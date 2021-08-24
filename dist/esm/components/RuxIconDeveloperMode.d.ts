import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDeveloperModeProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDeveloperMode["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDeveloperMode["size"];
}
interface RuxIconDeveloperModeEvents {
}
interface RuxIconDeveloperModeSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDeveloperMode extends SvelteComponent {
    $$prop_def: RuxIconDeveloperModeProps;
    $$events_def: RuxIconDeveloperModeEvents;
    $$slot_def: RuxIconDeveloperModeSlots;
    $on<K extends keyof RuxIconDeveloperModeEvents>(type: K, callback: (e: RuxIconDeveloperModeEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDeveloperModeProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDeveloperModeElement | undefined;
}
export default RuxIconDeveloperMode;

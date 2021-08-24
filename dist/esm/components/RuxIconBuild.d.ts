import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBuildProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBuild["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBuild["size"];
}
interface RuxIconBuildEvents {
}
interface RuxIconBuildSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBuild extends SvelteComponent {
    $$prop_def: RuxIconBuildProps;
    $$events_def: RuxIconBuildEvents;
    $$slot_def: RuxIconBuildSlots;
    $on<K extends keyof RuxIconBuildEvents>(type: K, callback: (e: RuxIconBuildEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBuildProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBuildElement | undefined;
}
export default RuxIconBuild;

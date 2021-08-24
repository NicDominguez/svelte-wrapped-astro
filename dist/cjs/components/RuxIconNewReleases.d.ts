import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNewReleasesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNewReleases["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNewReleases["size"];
}
interface RuxIconNewReleasesEvents {
}
interface RuxIconNewReleasesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNewReleases extends SvelteComponent {
    $$prop_def: RuxIconNewReleasesProps;
    $$events_def: RuxIconNewReleasesEvents;
    $$slot_def: RuxIconNewReleasesSlots;
    $on<K extends keyof RuxIconNewReleasesEvents>(type: K, callback: (e: RuxIconNewReleasesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNewReleasesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNewReleasesElement | undefined;
}
export default RuxIconNewReleases;

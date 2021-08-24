import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSchoolProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSchool["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSchool["size"];
}
interface RuxIconSchoolEvents {
}
interface RuxIconSchoolSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSchool extends SvelteComponent {
    $$prop_def: RuxIconSchoolProps;
    $$events_def: RuxIconSchoolEvents;
    $$slot_def: RuxIconSchoolSlots;
    $on<K extends keyof RuxIconSchoolEvents>(type: K, callback: (e: RuxIconSchoolEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSchoolProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSchoolElement | undefined;
}
export default RuxIconSchool;

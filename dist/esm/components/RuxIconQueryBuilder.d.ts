import { Components } from '@astrouxds/astro-web-components';
interface RuxIconQueryBuilderProps {
    /** The fill color for the icon */
    color?: Components.RuxIconQueryBuilder["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconQueryBuilder["size"];
}
interface RuxIconQueryBuilderEvents {
}
interface RuxIconQueryBuilderSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconQueryBuilder extends SvelteComponent {
    $$prop_def: RuxIconQueryBuilderProps;
    $$events_def: RuxIconQueryBuilderEvents;
    $$slot_def: RuxIconQueryBuilderSlots;
    $on<K extends keyof RuxIconQueryBuilderEvents>(type: K, callback: (e: RuxIconQueryBuilderEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconQueryBuilderProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconQueryBuilderElement | undefined;
}
export default RuxIconQueryBuilder;

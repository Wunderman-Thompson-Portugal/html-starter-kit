import { sectionConfig } from '@/lib/section-config'

export default function Blocks({ sections, relations }) {

    if (!sections) return <></>

    let layout = sections.map((slice, index) => {
        if (slice.__typename === undefined) {
            console.error('slice.__typename undefined');
            return;
        }
        let Component = sectionConfig[slice.__typename]
        let componentRelations = relations ? relations[slice?.__typename] : {}
        if (!Component) return <></>

        let block = <></>
        //let attrs = getDataAttributes(slice.primary)
        if (!Component.repeatable) {
            block = <Component.component key={index} {...slice} relations={componentRelations}></Component.component>
        } else if (slice.fields) {
            block = slice.fields.map((item, index) => <Component.component key={index} {...slice} relations={componentRelations}></Component.component>)
        }

        if (Component.rowWrap) {
            block = <div key={index} className="row">{block}</div>
        }

        //let header = Component.header !== false ? <Header slice={slice}></Header> : <></>
        //let illustrations = slice.primary && slice.primary.illustrations ? <Illustrations slice={slice}></Illustrations> : <></>

        return Component.wrap ? (
            <section key={index} className="o-section" data-slice={slice.__typename}>
                {block}
            </section>
        ) : <section key={index}>{block}</section>
    })

    return layout

}
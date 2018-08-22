// import * as N3 from "../../src/types/n3typing";
import * as N3 from "n3";

describe('Testing N3Writer', () => {
    it('Add Single Prefix', () => {
        const writer: N3.N3Writer = new N3.Writer();

        const expectedResult = `@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.`;

        writer.addPrefix('xsd', 'http://www.w3.org/2001/XMLSchema#');
        writer.end((error, result) => {
            expect(result).toContain(expectedResult);
        });
    });

    it('Add Multiple Prefixes', () => {
        const writer: N3.N3Writer = new N3.Writer();

        const expectedPrefix1 = `@prefix freebase: <http://rdf.freebase.com/ns/>.`;
        const expectedPrefix2 = `@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.`;

        writer.addPrefixes({
            freebase: N3.DataFactory.namedNode("http://rdf.freebase.com/ns/"),
            xsd: N3.DataFactory.namedNode("http://www.w3.org/2001/XMLSchema#")
        });

        writer.end((error, result) => {
            expect(result).toContain(expectedPrefix1);
            expect(result).toContain(expectedPrefix2);
        });
    });

    it('Creqte Quad', () => {
        const q = N3.DataFactory.quad(N3.DataFactory.namedNode('http://example.org/cartoons#Tom'),
            N3.DataFactory.namedNode('http://www.w3.org/1999/02/22-rdf-syntax-ns#type'),
            N3.DataFactory.namedNode('http://example.org/cartoons#Cat'));
            // value is returning the object 'id' property so the return type is correct
            console.log(q.subject.value);
    });
});

/* Se le pueden pasar valores a esta funcion, y en base a eso la otra funcion puede tomar los valores que pasaron a 
dicha funcion*/

const myFunction = (x) => {
  return () => console.log(`Rayos!!! ${x}`);
}

myFunction('Cesar')();


/* ----- PARTE 2 ------ */

const auditProps = {
  createAt: { default: new Date },
  updatedAt: { default: new Date },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
};

const Model = (defaultProps) => {
  return (name, props) => {
    const schema = moongose.schema({
      ...defaultProps,
      ...props
    });

    return moongose.model(name, schema);
  }
}

export const withAudit = Model(auditProps);


// En otro archivo

withAudit('Product', {
  name: String,
  description: String
});
describe("linkTo", function() {
  it("should return a valid link for Bloc '<a href='http://www.bloc.io'>Bloc</a>'", function() {
    expect(hello("Bloc", "http://www.bloc.io")).to.equal("<a href='http://www.bloc.io'>Bloc</a>");
  });
}); 

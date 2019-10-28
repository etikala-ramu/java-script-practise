function fun1()
{
    var math=
    {
        n1:10,
        n2:20,
    sum()
    {
        document.write('sum is:'+(eval(this.n1)+eval(this.n2))+'<hr>');
    },
    sub()
    {
        document.write('subtraction is:'+(eval(this.n1)-eval(this.n2))+'<hr>');
    },
    mul()
    {
        document.write('mul is:'+(eval(this.n1)*eval(this.n2))+'<hr>');
    },
    div()
    {
        document.write('div is:'+(eval(this.n1)/eval(this.n2))+'<hr>');
    },
    mod()
    {
        document.write('mod is:'+(eval(this.n1)%eval(this.n2))+'<hr>');
    }


    }
    math.sum();
    math.sub();
    math.mul();
    math.div();
    math.mod();
}
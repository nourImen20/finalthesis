// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Newscontract {
    struct Article {
        uint256 id;
        string title;
        string description;
        string articleType;
        string content;
        address journalist;
        string ipfsHash;  // Using IPFS hash for the picture
    }

    struct ArticleSummary {
        uint256 id;
        string title;
        string description;
        string articleType;
        string ipfsHash;
        address journalist;
    }

    mapping(uint256 => Article) public articles;
    uint256 public articleCount = 0;

    event ArticlePublished(uint256 id, string title, string description, string articleType, string ipfsHash, address journalist);
    event AllArticlesFetched(ArticleSummary[] articles);

    function addArticle(
        string memory _title,
        string memory _description,
        string memory _articleType,
        string memory _content,
        string memory _ipfsHash
    ) public {
        articleCount++;
        articles[articleCount] = Article(articleCount, _title, _description, _articleType, _content, msg.sender, _ipfsHash);
        emit ArticlePublished(articleCount, _title, _description, _articleType, _ipfsHash, msg.sender);
    }

    function getArticle(uint256 _id) public view returns (
        uint256,
        string memory,
        string memory,
        string memory,
        string memory,
        address,
        string memory
    ) {
        Article memory article = articles[_id];
        return (
            article.id,
            article.title,
            article.description,
            article.articleType,
            article.content,
            article.journalist,
            article.ipfsHash
        );
    }

    function getAllArticles() public {
        ArticleSummary[] memory allArticleSummaries = new ArticleSummary[](articleCount);
        for (uint256 i = 1; i <= articleCount; i++) {
            Article storage article = articles[i];
            allArticleSummaries[i - 1] = ArticleSummary(
                article.id,
                article.title,
                article.description,
                article.articleType,
                article.ipfsHash,
                article.journalist
            );
        }
        emit AllArticlesFetched(allArticleSummaries);
    }
}
